/*
    *** Global Object ***
    => NodeJs does not have window object but has a global object, where we can find everything that exits into
    window object.

    => Global Variable may appear to be global but are not because it is exist only in the scope of modules.

*/
let a =10;
global.console.log(a); // return console is a global object

// window.setTimeout(()=>{ // it is not working beacuse it's comes from window.
//     console.log("I am a set time out")
// }, 1000) 

global.setTimeout(()=>{ // it is working beacuse it's comes from global.
    console.log("I am a set time out")
}, 1000) 

console.log(__dirname); // return directory file
console.log(__filename); // return a main file

