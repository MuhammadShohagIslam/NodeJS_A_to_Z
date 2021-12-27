/*
        *** Read Stream ***
        Chunk of Data <== Buffer Data < === Data

        => The client does not have to wait, so he can work
        instantly with small data, it's called read stream

*/
const http = require('http');
const fs = require('fs');

// creating a read stream object
// const ourReadStream = fs.createReadStream(`${__dirname}/data/doc.txt`);

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         ourReadStream.on('data', (chunk) => {
//             res.write(chunk.toString());
//         });
//         ourReadStream.on('end', () => {
//             res.end('End');
//         });
//     }
// });

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write('<html><head><title>Form</title></head>');
//         res.write(
//             '<body><form method="POST" action ="/process" ><textarea name ="message"></textarea></form></body></html>'
//         );
//         res.end();
//     } else if (req.url === '/process' && req.method === 'POST') {
//         const body = [];
//         req.on('data', (chunk) => {
//             body.push(chunk);
//         });
//         req.on('end', () => {
//             const parseBody = Buffer.concat(body).toString();
//             console.log(parseBody);
//             res.write('Thank you for submitting');
//             res.end();
//         });
//     } else {
//         res.write('Not Found');
//         res.end();
//     }
// });
const server = http.createServer((req, res) => {
    // req is the readable string and res is a writable string
    if (req.url === '/') {
        const readStream = fs.createReadStream(`${__dirname}/data/doc.txt`, 'utf8');
        readStream.pipe(res);
    }
});

server.listen(5000, () => {
    console.log('Listenning to the 5000 port');
});
