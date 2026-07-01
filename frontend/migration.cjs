require('dotenv').config();
const fs = require('fs');
const { Client } = require('pg');

const DIRECT_URL = 'postgresql://postgres.sftrrgrwiaiklwgfiwfo:BSnfg6Vm4n8N3tKH@aws-1-ap-northeast-1.pooler.supabase.com:5432/postgres';

async function migrate() {
  console.log("Starting migration...");
  
  // 1. Read productsData.js
  let code = fs.readFileSync('src/constants/productsData.js', 'utf8');
  
  const rawProducts = JSON.parse(fs.readFileSync('extracted_products.json', 'utf8'));
  console.log(`Loaded ${rawProducts.length} products.`);

  // 2. Deduplicate products based on title + description
  const uniqueProductsMap = new Map();
  for (const p of rawProducts) {
    const key = `${p.title}-${p.description}`;
    if (!uniqueProductsMap.has(key)) {
      uniqueProductsMap.set(key, {
        id: p.id,
        title: p.title,
        line: p.line || '',
        category: p.category,
        url: p.url,
        image: p.image,
        gallery: p.gallery || [],
        badges: p.badges || [],
        tagline: p.tagline || '',
        description: p.description || '',
        features: p.features || [],
        specifications: p.specifications || {},
        options: p.options || {},
        variants: [p.id] // Keep track of what IDs were merged
      });
    } else {
      const existing = uniqueProductsMap.get(key);
      existing.variants.push(p.id);
      // optionally add the different image to gallery
      if (p.image && !existing.gallery.includes(p.image)) {
        existing.gallery.push(p.image);
      }
    }
  }

  const productsToInsert = Array.from(uniqueProductsMap.values());
  console.log(`Deduplicated down to ${productsToInsert.length} unique products.`);

  // 3. Connect to Supabase PG
  const client = new Client({ connectionString: DIRECT_URL });
  await client.connect();

  console.log("Creating tables...");
  await client.query(`
    CREATE TABLE IF NOT EXISTS products (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      product_id VARCHAR(255) UNIQUE NOT NULL,
      title VARCHAR(255) NOT NULL,
      line TEXT,
      category VARCHAR(255),
      url VARCHAR(255),
      image TEXT,
      gallery JSONB,
      badges JSONB,
      tagline TEXT,
      description TEXT,
      features JSONB,
      specifications JSONB,
      options JSONB,
      variants JSONB,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
    );
  `);
  
  // Also create a materials/filters table if we want to store filter metadata, but JSONB is fine for now.

  console.log("Clearing existing data (if any)...");
  await client.query('TRUNCATE TABLE products RESTART IDENTITY;');

  console.log("Inserting products...");
  for (const p of productsToInsert) {
    await client.query(`
      INSERT INTO products (
        product_id, title, line, category, url, image, gallery, 
        badges, tagline, description, features, specifications, options, variants
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
    `, [
      p.id, p.title, p.line, p.category, p.url, p.image, JSON.stringify(p.gallery),
      JSON.stringify(p.badges), p.tagline, p.description, JSON.stringify(p.features),
      JSON.stringify(p.specifications), JSON.stringify(p.options), JSON.stringify(p.variants)
    ]);
  }

  console.log("Migration complete!");
  await client.end();
  fs.unlinkSync('temp_data.js');
}

migrate().catch(console.error);
