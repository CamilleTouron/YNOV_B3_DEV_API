const fileReader = require("./fileReader");

//SYNCHRONE
console.time("sync");
fileReader.readSync;
console.timeEnd("sync");

async function main() {
    //ASYNCHRONE
    console.time("async");
    await fileReader.readAsync;
    console.timeEnd("async");
}
main();