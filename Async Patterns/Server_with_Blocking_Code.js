// Import the built-in 'http' module to create a basic web server_with_Blocking_Code
const http = require('http')

// Create the server_with_Blocking_Code
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('This is our home page!')
    }
    else if(req.url === '/about') {
        {
            /**
             * ⚠️ Important Note:
             * The nested loops below are synchronous and CPU-intensive and is called as BLOCKING CODE.
             * They block the Node.js event loop until finished.
             * That means while this loop runs, the server_with_Blocking_Code cannot handle
             * any other incoming requests — causing delays or "loading" behavior.
             *
             * This is why when you visit /about, the server_with_Blocking_Code appears stuck
             * until all console.log operations are completed.
             *
             * In real-world applications, heavy tasks should be offloaded
             * to worker threads or handled asynchronously to keep the server_with_Blocking_Code responsive.
             */

            for (let i = 0; i < 400; i++) {
                for (let j = 0; j < 400; j++) {
                    console.log(`${i}  ${j}`);
                }
            }
        }
            res.end('Welcome to our about page!')
        }
    else {
        res.end('Oops you have entered a wrong URL!')
    }
})
const number = 8000;
server.listen(number,()=>{ //Here .listen is asynchronous so it gets offloaded by event loop
    console.log(`Server listening on port ${number}`)
})