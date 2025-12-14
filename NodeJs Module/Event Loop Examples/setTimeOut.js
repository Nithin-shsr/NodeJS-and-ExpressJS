console.log("This will be printed first");
setTimeout(()=>{
    console.log("This will be printed at the end")
}, 0);

console.log("This will be printed as a second statement")

//Note : Here setTimeout() is also an Asynchronous function hence it will be executed at the end since it would get offloaded