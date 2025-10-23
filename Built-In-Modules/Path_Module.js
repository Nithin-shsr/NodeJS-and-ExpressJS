const path = require('path');

console.log(path.sep);

const filePath = path.join('Content','Subfolder','text.txt');
console.log(filePath);

//To access the last file name after joining the path
const base = path.basename(filePath);
console.log(base);


//To get the complete path / directory name :
const absolute = path.resolve(__dirname,'Content','Subfolder','text.txt');
console.log(absolute);
