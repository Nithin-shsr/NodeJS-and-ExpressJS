const { readFile} = require('fs')


console.log("Started the first task") // Gets Executed at the First run


// print statements in the below asynchronous block gets printed only at the end 
readFile('./text_file_1.txt','utf8',
    (err,result)=>{
            if(err){
                console.log(err)
                return
            }
    console.log(result)
    console.log("Finished the first task")
    }
)
console.log("Starting the next task") //Gets Executed secondly

//Note : In the above code snippet readFile() is an Asynchronous function so it will get offloaded initially.
