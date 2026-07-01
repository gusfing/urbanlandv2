import fs from 'fs';

const files = [
    'Resources/Materials.jsx',
    'Resources/ResourcesHub.jsx',
    'Projects/ProjectsDetail.jsx',
    'Resources/Downloads.jsx',
    'Products/ProductDetailPage.jsx'
];

files.forEach(file => {
    const p = 'C:/Users/ks209/Documents/kawaki clients/urbanland 3/urbanlandv2/frontend/src/pages/' + file;
    let c = fs.readFileSync(p, 'utf8');
    
    // Remove import
    c = c.replace(/import AdvantageCTA from ['"].*?AdvantageCTA['"];?\r?\n?/g, '');
    
    // Remove component usage
    c = c.replace(/<AdvantageCTA[\s\S]*?\/>\r?\n?/g, '');
    
    fs.writeFileSync(p, c);
    console.log('Cleaned', file);
});
