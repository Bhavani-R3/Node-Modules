const zlib = require('zlib')
const fs = require('fs')

const unZip = zlib.createUnzip()

let r = fs.createReadStream('test.gz')
let w = fs.createWriteStream('new.txt')

r.pipe(unZip).pipe(w)

console.log(`file unzipped successfully`)
