const { Worker } = require('worker_threads');
function executeWorker(file) {
    return new Promise((resolve, reject) => {
        const worker = new Worker(file);

        worker.on('online', () => {
            console.log('Execution de la tâche intensive en parallèle')
        })

        worker.on('message', workerMessage => {
            console.log(workerMessage)
            return resolve
        })

        worker.on('error', reject)
        worker.on('exit', code => {
            if (code !== 0) {
                reject(new Error(`Worker stopped with exit code ${code}`))
            }
        })
    })
}
async function prog() {
    // Tâche principale
    setInterval(() => { console.log('Tâche principale: la tâche en parallèle peut s\'exécuter') }, 10)

    // Tâche en parallèle
    await executeWorker('./worker.js')
}

prog();
