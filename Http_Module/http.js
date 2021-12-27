/*
    *** Http Module ***
        => Node.js has a built-in module called HTTP, which
         allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP)
*/
// importing Http module, using the require() method
const http = require('http');

/*
    The HTTP module can create an HTTP server which listens
    to server ports and gives a response back to the client.
*/
// creating HTTP server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('This Is a Home Page'); // write a response to the client
        res.end(); // end the response
    }
});

// add an HTTP Header
const server1 = http.createServer((req, res) => {
    if (req.url === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html',
        });
        res.write('This Is a Home Page With HTTP Header.');
        // req.url which holds the part of the url that comes after domain name.
        res.write(`Client Request is ${req.url}`);
        res.end();
    }
});

server1.listen(5050, () => {
    console.log('Listeninig on 5050 port');
});

server.listen(5000, () => {
    console.log('Listeninig on 5050 port');
});
