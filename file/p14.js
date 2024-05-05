const fs = require('fs')

fs.rename('./renamed.txt','new.txt',(err) => {
    if(err) console.log(err)
    console.log(`file name changed successfully`)
} )