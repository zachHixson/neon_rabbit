const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const webpack = require('webpack');

const BUILD_DIR = './build';
const wpConfig = {
    mode: 'production',
    entry: `${__dirname}/src/main.js`,
    output: {
        path: `${__dirname}/build`,
        filename: 'main.js'
    }
};
const compiler = webpack(wpConfig);

function printErr(err){
    if(err)console.error(err);
}

if (!fs.existsSync(BUILD_DIR)){
    fs.mkdirSync(BUILD_DIR);
}

if (!fs.existsSync(path.join(BUILD_DIR, 'art'))){
    fs.mkdirSync(path.join(BUILD_DIR, 'art'));
}

if (!fs.existsSync(path.join(BUILD_DIR, 'audio'))){
    fs.mkdirSync(path.join(BUILD_DIR, 'audio'));
}

compiler.run((err, res) => {
    if (err) return reject(err);
    return res;
});

fs.copyFile('index.html', './build/index.html', printErr);
fs.copyFile('style.css', './build/style.css', printErr);

fse.copy(path.join(__dirname, 'art'), path.join(BUILD_DIR, 'art'), printErr);
fse.copy(path.join(__dirname, 'audio'), path.join(BUILD_DIR, 'audio'), printErr);