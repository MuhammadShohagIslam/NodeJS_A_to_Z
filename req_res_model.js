/*
    *** Request Response Model ***

                                                            Http Request   
    Clinet Side(Computer/mobile) ================     Server (Any DataBase)
                                                            Http Response
    
        => Communication through the HTTP Request and HTTP Response between the client side and the server side 
            it's called Request Response Model.

    *** HTTP Request Methods: There are several kinds of method for sending Http Request like
                -> GET() -- most uses method
                -> POST() -- most uses method
                -> DELETE()
                -> PUT()
                -> OPTIONS()
                -> HEAD()

    *** HTTP Response: When a Server Responsed to us, where we can get two part:
            => Status Code (200(Successfully Request Executed), 404(Fail), 500(Internal Server Error))
            => Data

        *** Data:  The data that we get from the response, we get the data in two parts
            => Header (sensitive data -> access token, username)- data like( key and value)
            => Body(JSON(Popular), XML, STRING) -- unsensitive data 
*/

const http = require('http');

const server = http.createServer((req, res)=>{
    if (req.url == "/"){
        res.writeHead(200, {
            "Content-Type": "text/html"
        }) // header data
        res.write("<h1>This is Home Page</h1>") // body data
        res.end();
    }else if (req.url == '/about'){
        res.writeHead(200, {
            "Content-Type": "text/html"
        })// header data
        res.write("<h1>This is About Page</h1>") // body data
        res.end();

    }else if (req.url == '/contact'){
        res.writeHead(200, {
            "Conten-Type":"text/html"
        }) // header data
        res.write("<h1>This is Contact Page</h1>") // body data
        res.end();
    }
});

server.listen(5050, ()=>{
    console.log("Server Is Running");
})

