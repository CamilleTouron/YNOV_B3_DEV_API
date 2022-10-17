const { readFile } = require('fs/promises');
const fs = require('fs');

//ASYNCHRONE
async function readAsync() {
    try {
        let data = await readFile("./text.txt", "utf8");
        console.log(data);
        let data2 = await readFile("./text2.txt", "utf8");
        console.log(data2);
    } catch (err) {
        console.error(err)
    }
};
exports.readAsync=readAsync();
//SYNCHRONE
const readSync = function () {
    try {
        let data = fs.readFileSync('./text.txt', 'utf8');
        console.log(data);
        let data2 = fs.readFileSync('./text2.txt', 'utf8');
        console.log(data2);
    } catch (err) {
        console.error(err)
    }
};
exports.readSync=readSync;