const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// const expressHbs = require('express-handlebars');

const app = express();

// app.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'}))      //for handlebars
app.set('view engine', 'ejs');      //pug / handlebars / ejs
app.set('views', 'views');          // folder path

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use(shopRoutes)
app.use('/admin',adminData.routes)

app.use((req, res, next) => {
    // res.status(404).send('<h1>Page note found</h1>')
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))      // HTML file 
    res.status(404).render('404', {pageTitle: 'Page Not Found'})
})

app.listen(3000)
