// isWorker => this method is true if current process is worker (child)

const cluster = require('cluster')

if(cluster.isWorker) {
    console.log(`worker is running`)
} else {
    cluster.fork()
    cluster.fork()
    cluster.fork()
    cluster.fork()
}

// fork() => is used to spawn a new worker process 