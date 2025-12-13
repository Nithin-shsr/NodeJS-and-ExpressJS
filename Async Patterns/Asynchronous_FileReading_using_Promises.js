/**
 * ================================================
 * Asynchronous File Reading and Writing with Promises
 * ================================================
 *
 * In this code we demonstrate:
 * 1. Using Node.js's native Promise-based fs API (`fs.promises`)
 * 2. Reading two text files asynchronously with async/await
 * 3. Writing a new file that merges their contents
 * 4. Keeping older approaches (manual Promise wrapper, .then/.catch) for learning reference
 */

// Import promise-based readFile and writeFile from Node.js 'fs' module
const { readFile, writeFile } = require('fs').promises;

// Import 'util' to show how promisify works (not required here since fs.promises already returns Promises)
const util = require('util');
const readFilePromise = util.promisify(readFile);   // Redundant in this case, kept for demonstration
const writeFilePromise = util.promisify(writeFile); // Same as above

// -----------------------------------------------
// Previous approach: Manual Promise wrapper (commented out)
// This shows how we could wrap callback-based fs.readFile into a Promise.
// With fs.promises, this is no longer needed.
// -----------------------------------------------
/*
const getText = (filePath) => {
    return new Promise((resolve, reject) => {
        readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);   // Reject if error occurs
            } else {
                resolve(data); // Resolve with file contents
            }
        });
    });
};
*/

// -----------------------------------------------
// Async function to consume Promises using async/await
// -----------------------------------------------
const start = async () => {
    try {
        // Read first file asynchronously
        const firstFile = await readFile('./textFile1.txt', 'utf8');

        // Read second file asynchronously
        const secondFile = await readFile('./textFile2.txt', 'utf8');

        // Write a new file combining both contents, separated by newline
        await writeFile(
            './About_Promises.txt',
            `${firstFile}\n${secondFile}`
        );

    } catch (error) {
        // Catch and log any errors from read/write operations
        console.log(error);
    }
};

// Invoke the async function to start the workflow
start();

/**
 * -----------------------------------------------
 * Alternative consumption style (reference only)
 * -----------------------------------------------
 *
 * Using the earlier getText wrapper with .then/.catch:
 *
 * getText('./textFile1.txt')
 *     .then((result) => console.log(result))   // Runs if resolved
 *     .catch((err) => console.log(err));       // Runs if rejected
 *
 * This demonstrates both styles of handling Promises:
 * - async/await (modern, cleaner syntax)
 * - then/catch (traditional Promise chaining)
 */