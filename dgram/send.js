const dgram = require('dgram')
const socket = dgram.createSocket('udp4')

let msg = Buffer.from('welcome to nodejs')

socket.send(msg,5000,"localhost")

console.log('msg sent successfully')