const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

  app.set('view engine', 'ejs');
  app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use(shopRouter);

//Create 404 error Page
app.use((req, res, next)=> {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {pageTitle:'Page Not Found'});
});
console.log('test');
app.listen(3000);//created http server in expressjs