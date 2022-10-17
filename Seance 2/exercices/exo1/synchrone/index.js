const fs = require('fs');
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
console.time("timer");
readSync();
console.timeEnd("timer");