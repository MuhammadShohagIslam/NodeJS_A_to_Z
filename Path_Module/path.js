/*
    *** Path Module ***
        Path: The Path module provides a way of working with directories and file path.
       =>  path module includes methods to deal with file paths or location

*/
// importing Core module like path of Node JS
const path = require('path');
// console.log(path);

// current path
const currentPath = __filename;
// console.log(currentPath);

/*
    *** path.basename(path) ***
        => The path.basename() method returns the last part of a path.
*/
const baseName = path.basename(currentPath);
console.log(baseName);

/*
    *** path.dirname(path) ***
            => The path.dirname() method returns the directory name of a path.
*/
const directoryName = path.dirname(currentPath);
console.log(directoryName);

// another way we can get directory name
console.log(__dirname);

/*
    *** path.extname(path) ***
            => The path.extname() method returns the extension of the path
*/
const extensionName = path.extname(currentPath);
console.log(extensionName);

/*
    *** path.format(pathObj) ***
            => The path.format(pathObj) method returns a path string from an object.
*/
const pathObj = {
    root: '/ignore',
    dir: './node',
    name: 'path',
    ext: '.js',
};
const pathFormat = path.format(pathObj);
console.log(pathFormat);

/*
    *** path.isAbsolute(path) ***
            => The path.isAbsolute(path) method determines
                if path is an absoulte path or not with boolean way
            => Returns true if a path is a absolue path, otherwise false
*/
console.log(path.isAbsolute(currentPath));
console.log(path.isAbsolute('./global.js')); // (.) means make a relation with current directory, so it is not abosulte path

/*
    *** path.join([...paths]) ***
            => The path.join([...paths]) method joins the specified path segments into one path.
            => The specified path segments must be strings, separated by comma.
            => we use this for solving platform dependency

*/
const joinPath = path.join('home', 'local', 'muhammadShohagIslam', 'testfile.js');
console.log(joinPath);

/*
    *** path.resolve([...paths]) ***
            => The path.resolve([...paths]) method resolves the specified paths into an absolue path

*/
const resolvePath = path.resolve(__dirname, 'script', 'test.js');
console.log(resolvePath); // return a absolute path

/*
    *** path.parse(path) ***
            => The path.parse(path) method return an object
                whose properties represent significant elements of the path.
            => formats a path string into a path object
            => we can get the details of the path.
*/
const parsePath = path.parse(currentPath);
console.log(parsePath);
