// hashing data

const crypto = require('crypto')

const hash = crypto.createHash('sha256')

let input = "test@gmal.com";

let data = hash.update(input).digest('hex') // hex, binary, base64, base64url

console.log('final digest', data)