/*
 *** Write Stream ***
 */
const http = require('http');
const fs = require('fs');

// const readStream = fs.createReadStream(`${__dirname}/data/doc.txt`);
// const writeStream = fs.createWriteStream(`${__dirname}/data/newDoc.txt`);

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         readStream.on('data', (chunk) => {
//             writeStream.write(chunk.toString());
//         });
//         res.end('Data Write Finished');
//     }
// });

const server = http.createServer((req, res) => {
    // req is the readable string
    if (req.url === '/') {
        const readStream = fs.createReadStream(`${__dirname}/data/doc.txt`);
        const writeStream = fs.createWriteStream(`${__dirname}/data/newDoc.txt`);

        // readStream.on('data', (chunk) => {
        //     writeStream.write(chunk.toString());
        // });

        // using pipe
        readStream.pipe(writeStream);
        res.end('Data Exporting Finished');
    }
});

server.listen(5000, () => {
    console.log('Listenning to the 5000 port');
});
