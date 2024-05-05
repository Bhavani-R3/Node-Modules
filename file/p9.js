const fs = require('fs')

// deprecated
let status = fs.existsSync('./myfile.txt')
console.log(`status =`, status ? "Found" : "Not Found")
