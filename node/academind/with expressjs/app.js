const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
    // console.log("In product middleware");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button>Add</button></form>') //html content type

})

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/users', (req, res, next) => {
    // console.log('in user middleware');
    res.send('<h1>See Users</h1>') 
})


app.use('/', (req, res, next) => {
    // console.log("In home middleware");
    res.send('<h1>Hello Express</h1>') //html content type
})


app.listen(3000)
