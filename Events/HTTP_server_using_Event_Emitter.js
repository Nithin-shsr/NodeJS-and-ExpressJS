/**
 * ================================================
 * Basic HTTP Server using EventEmitter in Node.js
 * ================================================
 *
 * This code demonstrates two approaches to creating
 * an HTTP server with Node.js:
 * 1. Direct callback style (simpler, inline)
 * 2. EventEmitter style (flexible, allows multiple listeners)
 *
 * The active version uses the EventEmitter API to
 * listen for the 'request' event and respond to clients.
 */

// Import the built-in 'http' module
const http = require('http');

// -----------------------------------------------
/**Approach 1: Direct callback style (commented out)*/

// -----------------------------------------------
// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// -----------------------------------------------
/** Approach 2: EventEmitter style (active code)*/

// -----------------------------------------------

// Create an HTTP server instance without a callback
const server = http.createServer();

// The server emits a 'request' event whenever a client connects
// We subscribe to that event using .on()
// The listener receives the request (req) and response (res) objects
server.on('request', (req, res) => {
    res.end('Welcome'); // Responds with "Welcome" to any request
});

// Start the server and listen on port 5000
// Access via http://localhost:5000
server.listen(5000);

/**
 * -----------------------------------------------
 * Explanation:
 * -----------------------------------------------
 * - http.createServer() creates a new HTTP server.
 * - In callback style, you pass a function directly to handle requests.
 * - In EventEmitter style, you attach listeners to the 'request' event.
 * - Both approaches achieve the same result: responding to client requests.
 * - EventEmitter style is more flexible, as you can attach multiple listeners
 *   or handle events separately.
 */