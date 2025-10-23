const name = require('./parent_module_1');
const sayHi = require('./parent_module_2');

console.log(name);
sayHi(name.john);
sayHi(name.mick);