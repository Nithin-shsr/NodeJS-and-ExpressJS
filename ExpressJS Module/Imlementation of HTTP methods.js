const express = require('express');
const app = express();
const {people} = require('./data_for_json');

//Static assets

app.use(express.static('./Methods-example'))
//Parse form data
app.use(express.urlencoded({extended : false}))
//Parse Json data - To handle the json data 
app.use(express.json())

app.get('/api/people', (req, res) => {
    res.status(200).json({success:true,data:people})
})

app.post('/api/people', (req, res) => {
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success:false,msg:'Please provide name value'})
    }
    else{
    return res.status(201).json({success:true,person:name})
    }
})

app.post('/login',(req,res)=>{
    const {name} = req.body;
    if(name){
        res.status(200).send(`Welcome to the website ${name}`)
    }
    else{
        res.status(404).send("Please provide credentials")
    }

})

app.listen(3000, () => {
    console.log("Listening on port 3000!");
})