const express = require('express');
const axios = require('axios');

const app = express();
const url= "https://secrets-api.appbrewery.com/random";
app.use(express.static('public'));

app.get("/", async (req, res) => {
    try{
        const result = await axios.get(url);
        res.render('index.ejs',
            {
                secret : result.data.secret,
                user : result.data.user,
            });
    }
    catch(error){
        console.log(error.response.data);
        res.status(500);
    }
})

app.listen(5000,()=>{
    console.log(`Server is running on port 5000`)
})