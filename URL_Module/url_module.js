/*
    *** Node.js URL Module ***
        => The URL module splits up a web address into readable parts.
*/
const http = require('http');
const URL = require('url');

const server = http.createServer((req, res) => {
    const rabbilSchool = 'https://rabbil.com/coursedetails/expressrest1';
    // const stackLearner = 'http://courses.stackschool.co/';

    const customeUrlObj = URL.parse(rabbilSchool, true);

    // const hostName = customeUrlObj.host;
    const pathName = customeUrlObj.pathname;
    // const searchName = customeUrlObj.search;

    res.write(pathName);
    res.end();
});

server.listen(5050, () => {
    console.log('Server Is Running');
});
