const sum = function () {
    return Math.random() * (100 - 0) + 0;
};
const cpuBlocker = function () {
    let i;
    while (i < Math.pow(10, 10)) {
        i++;
    }
};
async function timer(){
    const start = performance.now();
    await cpuBlocker();
    const end = performance.now();
    const timer = end - start;
    console.log("Temps d'execution="+timer);
    return timer;
}


exports.sum = sum;
exports.timer = timer;