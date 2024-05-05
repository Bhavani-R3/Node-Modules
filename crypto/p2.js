let crypto = require('crypto')

let hash = crypto.createHmac('sha256', 'test123')
let input = "test@gmail.com";

let res = hash.update(input).digest('base64')

console.log('output =', res)