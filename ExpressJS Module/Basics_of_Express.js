const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log('user hit the resource')
    res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})

app.use((req, res) => {
    res.status(404).send('<h1>resource not found</h1>');
});


app.listen(5000, () => {
    console.log('server is listening on port 5000...')
})

/**
 * - .get → fetch data or serve pages.
 * - .post → submit new data.
 * - .put → update existing data.
 * - .delete → remove data.
 * - .all → handle all methods for a path.
 * - .use → middleware or catch-all logic.
 * - .listen → start the server.
 * */
