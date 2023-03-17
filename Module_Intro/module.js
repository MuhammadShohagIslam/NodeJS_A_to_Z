/*
    Module System: In the Node.js module system, each file treated as a separate/specific module.
                OR, in this case Node.js, when we create a (.js) file,
                this (.js) file encapsulated filec, freedom file,
                ''' Where no one else will be able to access what i write in one file'''

        => Each .js file treats  specific module
        => Module is the sum of the reusable codes.
        => Module in NodeJS is a simple / complex functionality organized in single
            or multiple JavaScript files.

        NodeJS include three types of modules:
            => Core Module (Own Module of NodeJS)
            => Local Modules (In the module we created by ourself)
            => Third Party Module

*/
/*
    *** Each of very javascript file of the node.js has module object.Into module object has export property

*/

/*
    *** Module Wrapper Function ***
        => Through JavaScript IIFE( Immediately Invoked Function Expression ), we can make module.
        through this concept, Node js had created module system(This patter is default in Node.js)
*/
// (function ( exports, require, module, __dirname, __filename) {
//     const add = (a, b) => a + b;
//     const sub = (a, b) => a - b;
//     const div = (a, b) => a / b;

//     const text = (a, b) => add(a, b) / sub(a, b);

//     module.exports = {
//         add,
//         sub,
//         div,
//         text,
//     };
// }); // through this way, we get module, export, __dirname

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
exports.div = (a, b) => a / b;
module.exports.div = function (){
} // common js system

const text = (a, b) => add(a, b) / sub(a, b);

/*
    *** Module Export ***
        => The module.exports object is created by module system.
        => through this object, we can be exposed our code to the real world.
        => Through this system, we can use this module.

*/
// module.exports = text; // single data exports system
// this default export

// another solution
// module.exports.add =add;
// module.exports.text = text;
// name export ( we can export multiple function, when necessary, we can immport it

// multiple data exports system
module.exports = {
    // it is better solution
    text,
    add,
};

// export = sub; // we can not use

// show details of module
// console.log(module);

// if we use package.json file type="module", we can use ES6 module system.
export funtionNanme
export default functionName;
import name from '.."// default import
import {name} from '." // name import
