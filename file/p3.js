const fs = require('fs')

const data = "All file system operations have synchronous, callback, and promise-based forms, and are accessible using both commonJS syntax and ES6 Modules(ESM) \n";

fs.writeFile('./test1.txt', data, function(err){
    if(err) console.log(err)
    console.log(`async file write completed`) 
})