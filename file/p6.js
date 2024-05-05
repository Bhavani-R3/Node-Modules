const fs = require('fs')

const data = "\n Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!\n";

fs.appendFileSync('./test2.txt', data)
    console.log(`file append sync completed`) 
