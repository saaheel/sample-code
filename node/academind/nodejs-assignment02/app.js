const express = require('express');

const app = express();

// app.use((req, res, next) => {
//   console.log('First Middleware');
//   next();
// });

// app.use((req, res, next) => {
//   console.log('Second Middleware');
//   res.send('<p>Assignment solved (almost!)</p>');
// });

app.use('/users', (req, res, next) => {
    // console.log('in user middleware');
    res.send('<h1>See Users</h1>') 
})

app.use('/', (req, res, next) => {
    console.log('in home middleware');
    res.send('<h1>Hello Express</h1>') //html content type
});


app.listen(3000);
