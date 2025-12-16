/**Basic Server coded below*/
/*const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(`User opened a server at ${port}`);
    res.end("Welcome to the home page!")
})

const port = 3000;

server.listen(port);*/


const http = require('http');

const server = http.createServer((req,res)=>{
    // console.log(req.method);
    // console.log(req.url);

    const url = req.url;

    if(url === '/')
    {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Welcome to our server!</h1>');
        res.end();
    }

    //For the about page
    else if(url === '/about')
    {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>You are in the about page!</h1>');
        res.end();
    }


    //404
    else
    {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<h1>Oops! Page not found..</h1>');
        res.end();
    }


})

const port = 3000;

server.listen(port);


/**
Issues in the above code :
    1. We don't have any metadata about the body that we are sending...

    2. In the above case
            i. if localhost:3000/  ==>  "Welcome to the home page!"
            ii. if localhost:3000/contact ==>  "Welcome to the home page!"
           iii. if localhost:3000/any ==>  "Welcome to the home page!"

        so as like the above for any case the response is going to be the same.
 */
