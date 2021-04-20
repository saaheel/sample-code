const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send('Hello Express Server');
});

server.get('/about', (req, res) => {
    res.send('About Express Server');
});


server.listen(4242, () => {
    console.log('Express server is running');
});