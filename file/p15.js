const fs = require('fs')

fs.rmdir('docs', (err) => {
    if(err) console.log(err)
    console.log(`folder deleted`)
})