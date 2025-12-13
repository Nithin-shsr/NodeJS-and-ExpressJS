/**
 * ================================================
 * EventEmitter Example in Node.js
 * ================================================
 *
 * This code demonstrates:
 * 1. Creating a custom event emitter using Node.js 'events' module
 * 2. Registering multiple listeners for the same event
 * 3. Emitting the event with arguments
 * 4. Executing all listeners attached to that event
 */

// Import the built-in 'events' module
const EventEmitter = require('events');

// Create a new instance of EventEmitter
const customEmitter = new EventEmitter();

// -----------------------------------------------
// Register the first listener for the 'response' event
// This listener expects two arguments: name and id
// -----------------------------------------------
customEmitter.on('response', (name, id) => {
    console.log(`Response received for the user : ${name} whose ID is : ${id}`);
});

// -----------------------------------------------
// Register a second listener for the same 'response' event
// This one does not use arguments, just logs a different message
// -----------------------------------------------
customEmitter.on('response', () => {
    console.log("Different function goes here...");
});

// -----------------------------------------------
// Emit the 'response' event with arguments
// Both listeners will be triggered in the order they were registered
// -----------------------------------------------
customEmitter.emit('response', 'Ram', 35);

/**
 * -----------------------------------------------
 * Explanation:
 * -----------------------------------------------
 * - EventEmitter allows you to define custom events and attach listeners.
 * - 'on' method registers a listener (callback) for a specific event.
 * - 'emit' method triggers the event, optionally passing arguments to listeners.
 * - Multiple listeners can be registered for the same event; all will run.
 *
 * In this example:
 * - First listener logs the name and id passed when emitting.
 * - Second listener logs a generic message.
 * - When 'response' is emitted with ('Ram', 35), both listeners execute.
 */