const path = require('path')
console.log(path.sep)
const filePath = path.join('\\current','incurrent','text.txt')
console.log(filePath)
console.log(path.basename(filePath))

const absolute = path.resolve(__dirname,filePath)
console.log(absolute)