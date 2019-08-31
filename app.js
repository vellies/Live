const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.engine(
    'hbs',
    expressHbs({
      layoutsDir: 'views/layouts/',
      defaultLayout: 'main-layout',
      extname: 'hbs'
    })
  );
  app.set('view engine', 'hbs');
  app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRouter);

//Create 404 error Page
app.use((req, res, next)=> {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {pageTitle:'Page Not Found'});
});
console.log('test');
app.listen(3000);//created http server in expressjs