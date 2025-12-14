// const { error } = require('console');
const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync('../File System Module/Sample Text Files/First.txt','utf-8');
const second = readFileSync('../File System Module/Sample Text Files/Second.txt','utf-8');
console.log("Text from the First file : ",first);
console.log("Text from the Second file : ",second);



writeFileSync(
    '../File System Module/Sample Text Files/File Created by Synchronous Approach.txt',
    `The Paragraph in the first file is : ${first} and The Paragraph in the second file is : ${second}`,
    {flag : 'a'} // This will append the above statement each time the file runs.....
);

console.log("The file has been successfully created!!");