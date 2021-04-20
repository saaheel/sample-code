const express = require('express');
// const bodyParser = require('body-parser');




const app = express();
// app.use(bodyParser.urlencoded({extended:false}))

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use((req, res, next) => {
    console.log('in use fn');
    next();
})

app.get('/', (req, res) => {
    res.send('getting root')
})

app.post('/profile', (req, res) => {
    const user = {
        name:'Shally',
        hobby:'Soccer'
    }

    console.log(req.body);
    // res.send('post profile');
    res.send(user);
})

app.listen(3000);