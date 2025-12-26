const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const bcrypt = require('bcrypt');

const db = new pg.Client({
    user : 'postgres',
    password : 'Nithin@17',
    database : 'secrets',
    host : 'localhost',
    port: 5432,
});
db.connect();

const app = express();
const port = 3000;
const saltRounds = 10;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
    const email = req.body.username;
    // console.log(email);
    const password = req.body.password;
    // console.log(password);

    try{
        const checkResult = await db.query("SELECT * FROM users WHERE email = $1",[email]);

        if(checkResult.rows.length > 0){
            res.send("Email already exists.Try logging in!!");
        }
        else{
            //Password Hashing
            bcrypt.hash(password,saltRounds,async (err,hash)=>{
                if(err){
                    console.log("Error Handling Password",err);
                }
                else
                {
                    const result = await db.query("INSERT INTO users (email,password) VALUES ($1,$2)",[email,hash]);
                    console.log(result);
                    res.render("secrets.ejs");
                }
            });
        }
    }
    catch (err){
        console.log(err);
    }
});

app.post("/login", async (req, res) => {
    const email = req.body.username;
    // console.log(email);
    const loginPassword = req.body.password;
    // console.log(password);

    try{
        const checkResult = await db.query("SELECT * FROM users WHERE email = $1",[email]);
        console.log(checkResult);
        if(checkResult.rows.length === 0){
            res.send("Oops you haven't registered!! Please try registering yourself");
        }
        else{
            const result = await db.query("SELECT * FROM users where email = $1",[email]);
            const user = result.rows[0];
            const storedHashedPassword = user.password;

            bcrypt.compare(loginPassword,storedHashedPassword,(err,result)=>{
                if(err){
                    console.log("Error comparing password",err);
                }
                else{
                    if(result){
                        res.render("secrets.ejs");
                    }
                    else{
                        res.send("Oops you have entered an Incorrect password!! Please try again!");
                    }
                }
            })
        }
    }
    catch(err){
        console.log(err);
    }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
