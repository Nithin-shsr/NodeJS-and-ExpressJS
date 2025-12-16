const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(`User opened a server at ${port}`);
    res.end("Welcome to the home page!")
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
