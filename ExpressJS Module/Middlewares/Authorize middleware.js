const authorize = (req,res,next)=>{
    console.log('----------------------------------------')
    console.log("Authorization Successful");

    const { user } = req.query;
    if(user === 'admin'){
        req.user = {username : 'admin',password:'admin'};
        console.log(req.user.username);
        next();
    }
    else{
        res.status(401).send('Sorry you are not authorized to use this page');
    }
}

module.exports = authorize;