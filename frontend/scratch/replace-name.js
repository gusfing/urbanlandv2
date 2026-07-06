import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

function replaceInFile(filePath) {
    if (!filePath.match(/\.(js|jsx|html|css|md|json)$/)) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    content = content.replace(/Urbanland/g, 'Decorlab');
    content = content.replace(/urbanland/g, 'decorlab');
    content = content.replace(/URBANLAND/g, 'DECORLAB');
    content = content.replace(/UrbanLand/g, 'Decorlab');
    content = content.replace(/Decor lab/ig, 'Decorlab');
    
    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
}

const targetDir = path.join(process.cwd(), 'src');
walkDir(targetDir, replaceInFile);

const indexHtml = path.join(process.cwd(), 'index.html');
if (fs.existsSync(indexHtml)) {
    replaceInFile(indexHtml);
}
const envFile = path.join(process.cwd(), '.env');
if (fs.existsSync(envFile)) {
    replaceInFile(envFile);
}
const packageJson = path.join(process.cwd(), 'package.json');
if (fs.existsSync(packageJson)) {
    replaceInFile(packageJson);
}
console.log('Done replacement.');
