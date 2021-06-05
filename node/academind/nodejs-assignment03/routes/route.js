const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');

router.get('/',(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'index.html'))
})

router.get('/users',(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'users.html'))
})

router.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})


module.exports = router;