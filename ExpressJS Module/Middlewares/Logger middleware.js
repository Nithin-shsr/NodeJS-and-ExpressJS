const logger = (req,res,next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log("Method: ",method);
    console.log("Url: ",url);
    console.log("Time: ",time);
    next()
}

module.exports = logger;