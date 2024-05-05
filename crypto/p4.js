// cipher.update()

// cipher.final()
let crypto = require('crypto')

// algo -> aes = 
const algo = 'aes-192-cbc'
const password = 'test123$'

let input = "Welcome to NodeJS"

const key = crypto.scryptSync(password, 'salt', 24)

// static iv
const iv = Buffer.alloc(16,0);

const cipher = crypto.createCipheriv(algo,key,iv)

// updating cipher with input data
let ency = cipher.update(input, 'utf8', 'hex')

ency += cipher.final('hex')

console.log(`output =`, ency)
