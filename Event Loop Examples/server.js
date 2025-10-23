const http = require('http')

const server = http.createServer((req, res) => {
    console.log('Request for an Event')
    res.end('Hello World')
})
const number = 8000;
server.listen(number,()=>{
    console.log(`Server listening on port ${number}`)
})