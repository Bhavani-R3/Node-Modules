const fs = require('fs')

fs.stat('./new.txt', (err,stats) => {
    if(err) console.log(err)
    console.log('stats =', stats)
})