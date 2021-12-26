/*
        *** Importing Module ***
                require() => through this, we can be imported module file from another.
                ( . ) => ( . ) means root ( that is the way where it is )
 */

// importing our created module
const math = require('./module');

// another way to import module by disstructuring
const { text, add } = require('./module');

console.log(math.text(10, 29));
console.log(math.add(10, 29));

console.log(text(10, 20));
console.log(add(10, 4));
