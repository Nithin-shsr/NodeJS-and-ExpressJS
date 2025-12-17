const express = require('express');
const app = express();
const logger = require('./Logger middleware');


app.get('/',logger,(req,res)=>{

    res.send('This is our home page');
})

app.get('/about',logger,(req,res)=>{

    res.send('This is our about page');
})

app.listen(3000,()=>{
    console.log('Server started on port 3000');
})