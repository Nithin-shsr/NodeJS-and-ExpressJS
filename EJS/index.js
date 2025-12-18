const express = require('express');
const app = express();

const day = new Date().getDay();

let type = "Its a weekday";
let advice = "Time to work hard!";

if(day === 0 || day === 6){

    type= "It is a weekend";
    advice= "Enjoy your day off!";
}


app.get('/',(req,res)=>{
    res.render('./index.ejs',{dayType: type,advice: advice});
})

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})