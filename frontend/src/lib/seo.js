/**
 * Updates page SEO tags in the document head dynamically.
 * Handles meta description, Open Graph tags, and injects/updates JSON-LD Schema markup.
 * 
 * @param {Object} seoData - Metadata payload containing title, description, schema, open graph nodes.
 */
export const updatePageSEO = (seoData = {}) => {
  if (typeof window === "undefined") return;

  const {
    title = "Urbanland | Premium Street Furniture & Parklets",
    description = "Urbanland Products LLP designs and manufactures premium modular street furniture, concrete planter systems, and transit shelters in India.",
    og_title,
    og_description,
    og_image,
    schema
  } = seoData;

  // 1. Update document title
  document.title = title;

  // 2. Update meta description
  updateMetaTag("name", "description", description);

  // 3. Update Open Graph tags
  updateMetaTag("property", "og:title", og_title || title);
  updateMetaTag("property", "og:description", og_description || description);
  if (og_image) {
    const imageUrl = Array.isArray(og_image) ? og_image[0]?.url || og_image[0] : og_image;
    if (imageUrl) updateMetaTag("property", "og:image", imageUrl);
  }
  updateMetaTag("property", "og:type", seoData.og_type || "website");

  // 4. Update JSON-LD Schema Script
  let schemaScript = document.getElementById("schema-ld-json");

  if (schema) {
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = "schema-ld-json";
      schemaScript.type = "application/ld+json";
      document.head.appendChild(schemaScript);
    }
    
    try {
      const schemaString = typeof schema === "string" ? schema : JSON.stringify(schema, null, 2);
      schemaScript.textContent = schemaString;
    } catch (e) {
      console.error("Error serializing JSON-LD schema:", e);
    }
  } else {
    // If no schema is provided, clean up any existing tag to prevent stale data
    if (schemaScript) {
      schemaScript.remove();
    }
  }
};

/**
 * Clean up page-specific SEO modifications (e.g. schema tag) when unmounting a view.
 */
export const cleanPageSEO = () => {
  if (typeof window === "undefined") return;
  const schemaScript = document.getElementById("schema-ld-json");
  if (schemaScript) {
    schemaScript.remove();
  }
};

/**
 * Utility: Updates or creates a meta tag in the head
 */
const updateMetaTag = (attribute, value, content) => {
  let meta = document.querySelector(`meta[${attribute}="${value}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, value);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
};

/**
 * Dynamic Generator: Constructs local Schema.org Product schema markup
 */
export const generateProductSchema = (product, pageUrl = "") => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "image": product.image,
    "description": product.tagline || product.description,
    "brand": {
      "@type": "Brand",
      "name": "Urbanland"
    },
    "category": product.category,
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "itemCondition": "https://schema.org/NewCondition",
      "url": pageUrl
    }
  };
};

/**
 * Dynamic Generator: Constructs local Schema.org BlogPosting schema markup
 */
export const generateBlogPostingSchema = (post, pageUrl = "") => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageUrl
    },
    "headline": post.title?.rendered || "",
    "image": post.featured_image,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author_name || "Urbanland Contributor"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Urbanland Products LLP",
      "logo": {
        "@type": "ImageObject",
        "url": "https://urbanland.in/logo.png" // placeholder for logo asset
      }
    },
    "description": post.excerpt?.rendered?.replace(/<[^>]*>/g, "") || ""
  };
};
