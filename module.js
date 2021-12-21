/*
    Module: In the Node.js module system, each file treated as a separate/specific module.
        => Module is the sum of the reusable codes.
        => Module in NodeJS is a simple / complex functionality organized in single or multiple JavaScript files.
    
        NodeJS include three types of modules:
            => Core Module (Own Module of NodeJS)
            => Local Modules (In the module we created by ourself)
            => Third Party Module

*/

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
exports.div = (a, b) => a / b;

const text = (a, b) => add(a, b) / sub(a, b);


/*
    *** Module Export ***
        => The module.exports object is created by module system.
        => through this object, we can be exposed our code to the real world.
        => Through this system, we can use this module.

*/
// module.exports = text; // single data exports system

// another solution
// module.exports.add =add;
// module.exports.text = text;

// multiple data exports system
module.exports ={ // it is better solution
    text,
    add
}

// export = sub; // we can not use

// show details of module
// console.log(module);