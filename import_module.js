/*
    *** Importing Module ***
*/

// importing our created module
const math = require('./module');

// another way to import module by disstructuring 
const {text, add} = require('./module');

console.log(math.text(10, 29));
console.log(math.add(10, 29));

console.log(text(10, 20));
console.log(add(10, 4));