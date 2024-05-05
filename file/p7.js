const fs = require('fs')

fs.unlink('./test1.txt', function(err) {
    if(err) console.log(err)

    console.log(`async method of file unlinked successfully`) 
})
   
