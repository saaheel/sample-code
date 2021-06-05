const fs = require('fs');

const requestHandler = (req, res) => { 
    
    const url = req.url;
    const method = req.method;   

    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();    
    }
    if(url === '/message' && method === "POST"){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk)
        });
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message=parseBody.split("=")[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            }) 
        });
        
        
    }
    res.setHeader('Content-Type','text/html')
    res.write('<html>');
    res.write('<head><title>My First App</title></head>');
    res.write('<body><h1>hello from 1st node js app</h1></body>');
    res.write('</html>');
    res.end();
}

// option 1
// module.exports = requestHandler;

// option 2
// module.exports = {
//     handle:requestHandler,
//     someText:'Sample text'
// }


// option 3a
// module.exports.handler = requestHandler;
// module.exports.someText = 'Some text';

// option 3b
exports.handler = requestHandler;
exports.someText = 'Some text';