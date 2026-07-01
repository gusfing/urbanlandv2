const fs = require('fs');
const content = fs.readFileSync('C:/Users/ks209/Documents/kawaki clients/urbanland 3/urbanlandv2/frontend/src/data/productConfigs.js', 'utf8');
const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('01.') && lines[i+2] && (lines[i+2].includes('Quality') || lines[i+2].includes('Durability'))) {
        console.log('Found near line ' + (i+1));
        console.log(lines.slice(i-2, i+6).join('\n'));
    }
}
