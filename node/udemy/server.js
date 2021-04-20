const express = require('express');
// const bodyParser = require('body-parser');

const app = express();

app.use(express.static(__dirname + '/public'))
// app.use(bodyParser.urlencoded({extended:false}))

// app.use(express.urlencoded({extended: false}));
// app.use(express.json());

// app.get('/:id', (req, res) => {

//     // console.log(req.query);
//     // console.log(req.headers);
//     // console.log(req.body);
//     console.log(req.params);

//     // res.send('getting root')
//     res.status(404).send('not found')
// })


app.listen(3000);