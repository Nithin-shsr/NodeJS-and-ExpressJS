const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(`User opened a server at ${port}`);
    res.end("Welcome to the home page!")
})

const port = 3000;

server.listen(port);