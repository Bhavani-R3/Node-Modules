const dgram = require('dgram')
const socket = dgram.createSocket('udp4')
const assert = require('assert')

// node event
socket.on('message', function(msg,err) {
    if(err) console.log(err)
    console.log('message =', msg) // buffer
    console.log('message =', msg.toString()) // string
})

socket.bind(5000)