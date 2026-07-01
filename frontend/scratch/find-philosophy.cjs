const fs = require('fs');
const content = fs.readFileSync('C:/Users/ks209/Documents/kawaki clients/urbanland 3/urbanlandv2/frontend/src/data/productConfigs.js', 'utf8');
const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('philosophy: {')) {
        console.log(lines[i+1]);
    }
}
