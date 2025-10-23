const http = require('http');


//req ==> Represents the incoming Request

//res ==> Represents what we are sending back in-turn

// res is an object which supports some methods some of them are,
//         1. res.write()
//         2. res.end()


const server = http.createServer((req,res)=>{
    if(req.url === '/')
    {
        res.end("Welcome to our Home page !!!");
        return;
    }

    if(req.url === '/about')
    {
        res.end("In this page you can know briefly about us...");
        return;
    }

    res.end(`
        <h1>OOPS!!! You have entered an unknown page </h1>
        <p>We cant seem to provide your requested page ...</p>
        <a href = "/">Back to home</a>
        `)
});

server.listen(5000 , () =>{
    console.log("Server is listening on port 5000");

});