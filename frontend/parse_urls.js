const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\ks209\\.gemini\\antigravity-ide\\brain\\2c229e03-208c-4cdf-a631-6a683675651e\\.system_generated\\steps\\4152\\content.md', 'utf8');
const urls = [];
const matches = content.match(/https?:[^\s"']+/g);
if (matches) {
  matches.forEach(url => {
    const cleanUrl = url.replace(/\\\//g, '/').replace(/\\/g, '');
    if (!urls.includes(cleanUrl)) {
      urls.push(cleanUrl);
    }
  });
}
console.log(JSON.stringify(urls, null, 2));
