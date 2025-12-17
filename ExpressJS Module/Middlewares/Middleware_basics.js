const express = require('express');
const app = express();
const logger = require('./Logger middleware');
const authorize = require('./Authorize middleware');
const morgan = require('morgan');
// app.use([authorize,logger]);

app.use(morgan('tiny'));
/**
 * Instead of using logger middleware in each an every routes that we are creating we can declare them only once
 * and can be used for all
 *
 * The above can be implemented using  .USE() method
 */

/*
Note ;
    1. Order matters in Middleware
        If app.use(logger) is placed after app.get('/', (req, res)),
        then the logger middleware will only apply to routes that are defined below it.
        Routes defined above will not use the logger.
        */

app.get('/',(req,res)=>{
    res.send('This is our home page');
})

app.get('/about',(req,res)=>{

    res.send('This is our about page');
})

app.listen(3000,()=>{
    console.log('Server started on port 3000');
})