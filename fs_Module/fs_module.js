/*
    *** Node.js Module ***
        => Node.js includes fs module to access physical file system
        => The fs module is responsible for all the asynchronous or synchronous file I/O operations.

    *** Synchronous:
        => Data is sent in form of blocks or frames
        => There is no gap present between data
        => This transmission is fast
        => More efficient and more reliable for large amount of data
        => We can not work multi-tasking at a time ***

    *** Asynchronous:
        => Start bits and stop bits are added with data.
        => Data is sent in form of byte or character.
        => Asynchronous transmission is slow.
        => There is parent gap between data.
        => We can work multi-task at a time ***

    *** When we use Asynchronous or Synchronous? ***
                        *** Synchronous So Suitable For Simple Server Site Process ***

                                                                    Http Request
            Clinet Side(Computer/mobile) ================     Simple Server Site Process
                                                                    Http Response

        => Processes that will be easy, will not need to be long time, we no need to be multiple trying,
            in this case use Synchronous Data Transmission System.

                                *** Asynchronous So Suitable For Complex Server Site Processing ***

                                                                    Http Request
            Clinet Side(Computer/mobile) ================     Complex Server Site Processing
                                                                    Http Response
        => Processes that will not be easy, will take long time, can be filed, we need to be multiple trying,
            in this case use Asynchronous Data Transmission System
*/
// importing node.js core module
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Asynchronous readFile() ->  Reads Existing file
        // fs.readFile('./home.html', (err, data)=>{
        //     res.writeHead(200, {
        //         "Content-Type": "text/html"
        //     })
        //     res.write(data);
        //     res.end();
        // })

        // // Synchronous readFileSync() -> Reads Existing file
        // let data = fs.readFileSync('home.html');
        // res.writeHead(200, {
        //     "Content-Type": "text/html"
        // })
        // res.write(data);
        // res.end();

        // Asynchronous writeFile() ->  Write to the file. If file exists then overwrite the content otherwise creates new file.
        // fs.writeFile('document.txt', 'This is a virtual paper for writing', (err)=>{
        //     if(err){
        //         res.writeHead(200, {
        //             "Content-Type": "text/html"
        //         })
        //         res.write("File write failed");
        //         res.end();
        //     }else{
        //         res.writeHead(200, {
        //             "Content-Type": "text/html"
        //         })
        //         res.write("Write file successfully");
        //         res.end();
        //     }
        // })

        // Synchronous writeFileSync() ->  Write to the file. If file exists then overwrite the content otherwise creates new file.

        // let error =  fs.writeFileSync('syndocument.txt', "I am a virtual paper for writing synschronous way");
        // if (error){
        //     res.writeHead(200, {
        //         "Content-Type": "text/html"
        //     });
        //     res.write("File write failed");
        //     res.end();
        // }else{
        //     res.writeHead(200, {
        //         "Content-Type": "text/html"
        //     });
        //     res.write("File Write Success");
        //     res.end();
        // }

        // Asynchronous rename() -> Renames an existing file
        // fs.rename('document.txt', 'documentAsyn.txt', function(err){
        //     if(err){
        //         res.writeHead(200, {
        //             "Content-Type":"text/html"
        //         });
        //         res.write("File Rename Failed");
        //         res.end();
        //     }else{
        //         res.writeHead(200, {
        //             "Content-Type":"text/html"
        //         });
        //         res.write("File Rename Success");
        //         res.end();
        //     }
        // })

        // Synchronous renameSync() -> Renames an existing file
        // let error = fs.renameSync('syndocument.txt', 'documentSync.txt');
        // if(error){
        //     res.writeHead(200, {
        //         "Content-Type":"text/html"
        //     });
        //     res.write("File Rename Failed");
        //     res.end();
        // }else{
        //     res.writeHead(200, {
        //         "Content-Type":"text/html"
        //     });
        //     res.write("File Rename Success");
        //     res.end();
        // }

        // // Asynchronous unlink() -> delete file
        // fs.unlink('documentAsyn.txt', (error)=>{
        //     if(error){
        //         res.writeHead(200, {
        //             "Content-Type": "text/html"
        //         })
        //         res.write("File Delete Failed");
        //         res.end();
        //     }else{
        //         res.writeHead(200, {
        //             "Content-Type": "text/html"
        //         })
        //         res.write("File Delete Success");
        //         res.end();
        //     }
        // })

        //     // Synchronous unlinkSync() -> delete file
        //     let error = fs.unlinkSync('documentSync.txt');
        //     if(error){
        //         res.writeHead(200, {
        //             "Content-Type": "text/html"
        //         });
        //         res.write("File Delete Failed");
        //         res.end();
        //     }else{
        //         res.writeHead(200, {
        //             "Content-Type": "text/html"
        //         });
        //         res.write("File Delete Success");
        //         res.end();
        //     }

        // // Synchronous existsSync() -> Determines whether the specified file exists or not
        // let result = fs.existsSync('home.html');
        // if(result){
        //     res.end("File Exists");
        // }else{
        //     res.end("File Not Exists");
        // }

        // Asynchronous exists() -> Determines whether file exists or not
        fs.exists('document.txt', (result) => {
            if (result) {
                res.end('File Exists');
            } else {
                res.end('File not Exists');
            }
        });
    }
});

server.listen(5050, () => {
    console.log('Server is running');
});
