const os = require('os');

const user = os.userInfo();
console.log(user);
console.log(`System uptime is ${os.uptime()} seconds`);

const currentOS = {
    name : os.type(),
    totalMemory : os.totalmem(),
    FreeMemory : os.freemem(),
    release : os.release(),
}

console.log(currentOS);
