const fs = require('fs')

function read(file, isJson = false) {
    let str = fs.readFileSync(file, 'utf8')
    return isJson ? JSON.parse(str) : str
}


module.exports = { read }