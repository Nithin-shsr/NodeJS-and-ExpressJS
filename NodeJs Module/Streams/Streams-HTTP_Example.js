// Import the built-in HTTP module to create a web server
const http = require('http');

// Import the File System module to read from and write to files
var fs = require('fs');

// Create an HTTP server that handles incoming requests with a callback
http.createServer((req, res) => {

    // (Alternative approach, commented out)
    /** Read the entire file synchronously into memory as a single string
    // const text = fs.readFileSync('./bigFile.txt', 'utf8');

    // Send the full string content in one go as the HTTP response
    // res.end(text);*/

    // Create a readable stream for bigFile.txt that reads content in chunks
    const fileStream = fs.createReadStream('./bigFile.txt', 'utf8');

    // Pipe the readable stream directly into the HTTP response (a writable stream)
    // This streams the file content to the client efficiently, chunk by chunk
    fileStream.pipe(res);

// Start the server and listen on port 5000 for incoming HTTP connections
}).listen(5000);