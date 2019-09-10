const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');

const db = require('./util/database');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

  app.set('view engine', 'ejs');
  app.set('views', 'views');

  // db.execute('SELECT * FROM products')
  // .then(result=>{
  //   console.log(result[0], result[1]);
  // })
  // .catch(err=>{
  //   console.log(err);
  // });

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use(shopRouter);

//Create 404 error Page
app.use(errorController.get404);

app.listen(3000);//created http server in expressjs