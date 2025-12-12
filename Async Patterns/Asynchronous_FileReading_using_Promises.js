const {readFile} = require('fs');

// Wrapper function: converts callback-based 'readFile' into a Promise
const getText = (filePath) => {
    return new Promise((resolve, reject) => {
        readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}

// Async function to consume Promises using async/await
const start = async () => {
    try{
        const firstFile = await getText('./textFile1.txt')
        const secondFile = await getText('./textFile2.txt')
        console.log(firstFile)
        console.log(secondFile)
    } catch (error) {
        console.log(error)
    }
}

start()// Invoke the async function


/**
 * Alternative consumption using .then/.catch:
 *
 * getText('./textFile1.txt')
 *     .then((result) => console.log(result))   // Runs if resolved
 *     .catch((err) => console.log(err));       // Runs if rejected
 *
 * This shows both styles of handling Promises:
 * - async/await (modern, cleaner syntax)
 * - then/catch (traditional Promise chaining)
 */
