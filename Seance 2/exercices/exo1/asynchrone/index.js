const { readFile } = require('fs/promises');

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
async function main() {
    console.time("timer");
    await readAsync();
    console.timeEnd("timer");
}
main();