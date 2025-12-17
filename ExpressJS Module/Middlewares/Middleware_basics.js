const express = require('express');
const app = express();

const logger = (req,res,next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log("Method: ",method);
    console.log("Url: ",url);
    console.log("Time: ",time);
    next()
}

app.get('/',logger,(req,res)=>{

    res.send('This is our home page');
})

app.get('/about',logger,(req,res)=>{

    res.send('This is our about page');
})

app.listen(3000,()=>{
    console.log('Server started on port 3000');
})