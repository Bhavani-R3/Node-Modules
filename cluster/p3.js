const cluster = require('cluster')
const http = require('http')
const numOfCps = require('os').cpus().length

if(cluster.isMaster) {
    console.log(`Master with process id =: ${process.pid} is running`);

    // fork the workers
    for(i=0; i< numOfCps; i++) {
        cluster.fork()
    }

    cluster.on('exit', (worker,code,single) => {
        console.log(`worker is running with process id =${worker.process.pid} died`)
    })
} else {
    // worker are sharing an http server
    http.createServer((req,res) => {
        res.writeHead(200);
        res.end('An example of cluster\n')
    }).listen(4000)
    console.log(`worker with process id = ${process.pid} started`)
}
