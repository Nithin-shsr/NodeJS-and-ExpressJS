const {readFile,writeFile} = require('fs');

readFile('../File System Module/Sample Text Files/First.txt','utf-8',(err,result)=>
{
    if(err)
    {
        console.log(err);
        return;
    }

    const first = result;

    //NOTE : If you haven't included utf-8 coding you won't get any text rather u get buffer code like <> encoded......

    readFile('../File System Module/Sample Text Files/Second.txt','utf-8',(err,result)=>
    {
        if(err)
        {
            console.log(err);
            return;
        }

        const second = result;

        writeFile(
            '../File System Module/Sample Text Files/File Created by Asynchronous Approach.txt',
            `The Paragraph in the first file is : ${first} and The Paragraph in the second file is : ${second}`,
            (err,result)=>
            {
                if(err)
                {
                    console.log(err);
                    return;
                }

                console.log("The file had been successfully created !!!",result);
            }
        )
    })

})