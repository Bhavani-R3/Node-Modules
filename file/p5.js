const fs = require('fs')

const data = "Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!\n";

fs.appendFile('./test1.txt', data, function(err){
    if(err) console.log(err)
    console.log(`file append completed`) 
})