/*
    *** OS Module ***
        => OS Module is a one kind of Node Js Module which provides operating system-related utitity
        methods and properties.

*/
// importing os module
const os = require('os');

/*
    *** os.arch() ***
        => os.arch() method returns the operating system CPU architecture
            for which the Node.js binary compiled.
*/
console.log(os.arch());

/*
    *** os.cpus() ***
        => os.cpus() method returns an array of objects containing information
             about each logical CPU core.
*/
// console.log(os.cpus());

/*
    *** os.freemem() ***
        => os.freemem() method returns the amount of free system memory in bytes as an integer.
*/
console.log(os.freemem());

/*
    *** os.homedir() ***
        => os.homedir() method returns the string path of the current user's home directory.
*/
console.log(os.homedir());

/*
    *** os.hostname() ***
        => os.hostname() method returns the host name of the operating system as a string
*/
console.log(os.hostname());

/*
    *** os.networkInterfaces() ***
        => os.networkInterfaces() method returns an object containing network interfaces
            that have been assigned a network address
*/

// console.log(os.networkInterfaces());

/*
    *** os.platform() ***
        => os.platform() method returns a string indentifying the operating system platform.
*/
console.log(os.platform());

/*
    *** os.release() ***
        => os.release() method returns the operating system as a string
*/
console.log(os.release());
/*
    *** os.userInfo([options]) ***
        => os.userInfo([options]) method returns information about the currectly effective user
*/
console.log(os.userInfo());

/*
    *** os.totalmem() ***
        => os.totalmem() method returns the total amount of system memory in bytes as an integer.
*/
console.log(os.totalmem());

/*
    *** os.version() ***
        => os.totalmem() method returns a string identifying the kernel version.
*/
console.log(os.version());
