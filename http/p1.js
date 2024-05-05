const http = require('http')

let server = http.createServer(function(req,res){
    res.write('welcome to nodejs') // used to write and send chunk of the response to server
    res.end()
})

server.listen(4000, () => {
    console.log(`serevr is up, running at http://localhost:4000`)
}) 

/* http.createServer(function(req,res){
    res.write('welcome to nodejs') // used to write and send chunk of the response to server
    res.end()
}).listen(4000, () => {
    console.log(`serevr is up, running at http://localhost:4000`)
}) */