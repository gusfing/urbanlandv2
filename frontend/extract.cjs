const fs = require('fs');

let code = fs.readFileSync('src/constants/productsData.js', 'utf8');
const start = code.indexOf('const staticProducts = [') + 'const staticProducts = '.length;
const end = code.lastIndexOf('];', code.indexOf('mapProductImage')) + 1;

let arrayCode = code.substring(start, end);

// Replace variable names (e.g., benchesImg) with string literals ('benchesImg')
arrayCode = arrayCode.replace(/([a-zA-Z0-9_]+Img|[a-zA-Z0-9_]+Ugc|[a-zA-Z0-9_]+Hero|gbg[0-9]|welcome[0-9])/g, '"$1"');

const array = eval('(' + arrayCode + ')');

fs.writeFileSync('extracted_products.json', JSON.stringify(array, null, 2));
console.log('Saved ' + array.length + ' products');
