const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<h1>Hello Express</h1>') //html content type
})

module.exports = router;



