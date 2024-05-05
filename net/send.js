const net = require('net')

// server
const server = net.createServer(function(socket){
    socket.end("My new message is here")
})

// node event -> error
server.on('error', (err) => {
    if(err) console.log(err)
})

server.listen(() => {
    let address = server.address()
    console.log(`server port %j`, address)
})