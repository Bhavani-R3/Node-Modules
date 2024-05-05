// read file
const fs = require('fs')

// sync read
let data = fs.readFileSync('./myfile.txt')

    console.log(`sync read =`, data) // buffer
    console.log(`sync read =`, data.toString()) // string