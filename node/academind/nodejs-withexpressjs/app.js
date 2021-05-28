const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));




app.use('/', (req, res, next) => {
    // console.log("In home middleware");
    res.send('<h1>Hello Express</h1>') //html content type
})


app.listen(3000)
