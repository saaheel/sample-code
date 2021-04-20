const http = require('http');

const requestListner = (req, res) => {
    // req, res are streams
    console.dir(req, { depth: 0 });
    console.dir(res, { depth: 0 });
    res.write('Hello Node 1');
    res.end();
}

const server = http.createServer();
server.on('request', requestListner);

server.listen(4242, () => {
    console.log('server is running');
})