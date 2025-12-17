const express = require('express');
const app = express();
const {people} = require('./data_for_json');

app.get('/api/people', (req, res) => {
    res.set('Cache-Control', 'no-store');
    res.status(200).json({success:true,data:people});
})

app.listen(3000, () => {
    console.log("Listening on port 3000!");
})