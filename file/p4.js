const fs = require('fs')

const data = "All file system operations have synchronous, callback, and promise-based forms, and are accessible using both commonJS syntax and ES6 Modules(ESM) \n";

fs.writeFileSync('./test2.txt', data)

    console.log(`async file write sync completed`) 
