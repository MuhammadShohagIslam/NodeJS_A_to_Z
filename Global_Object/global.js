/*
    *** Global Object Vs Window Object ***
        => NodeJs does not have window object but has a global object,
            beacuse as a server side developer does not need to work with whole Window object
            but where we can find not everything that exits into window object.

        => When we declare a variable in Node.js, those variables do not attach
            with global object But in this case window, it is attached.

        => Global Variable may appear to be global but are not because
             it is exist only in the scope of modules.

*/
console.log(global); // return global object

const a = 10;
console.log(a);
console.log(global.a); // return undefined beacuse 'a' is not attach with global

// window.setTimeout(()=>{ // it is not working beacuse it's comes from window.
//     console.log("I am a set time out")
// }, 1000)

global.setTimeout(() => {
    // it is working beacuse it's comes from global.
    console.log('I am a set time out');
}, 1000);

/*
 *** Since __dirname and __filename are not come from global, sowhere  this property comes from ???

        => Through JavaScript IIFE( Immediately Invoked Function Expression ), we can make module.
        through this concept, Node js had created module system(This patter is default in Node.js)

    // (function ( exports, require, module, __dirname, __filename) {
    //     const add = (a, b) => a + b;

    //     module.exports = {
    //         add,
    //     };
    // }); // through this way, we get module, export, __dirname
 */
console.log(__dirname); // return directory file
console.log(__filename); // return a main file
