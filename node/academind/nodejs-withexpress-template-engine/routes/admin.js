const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// /admin/add-product       => GET
router.get('/add-product', (req, res, next) => {
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button>Add</button></form>') //html content type
    // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'))
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))       // render html
    res.render('add-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product',
        activeAddProduct: true,
        formsCSS: true,
        productCSS: true
    })                                        // render pug template
})

// /admin/add-product       => POST
router.post('/add-product', (req, res, next) => {
    // console.log(req.body);
    products.push({ title: req.body.title })
    res.redirect('/');
})

exports.routes = router;
exports.products = products;