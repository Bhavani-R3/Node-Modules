const fs = require('fs')

function getCurrentFileNames() {
    fs.readdirSync(__dirname).forEach(item => {
        console.log(item)
    })
}

getCurrentFileNames();