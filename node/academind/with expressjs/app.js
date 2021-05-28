const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("In middleware");
    next();     // allows the request to contunue to the next middleware in line
})
app.use((req, res, next) => {
    console.log("In another middleware");
    res.send('<h1>Hello Express</h1>') //html content type
    // res.send(true)  //json content type
})


app.listen(3000)
