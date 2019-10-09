const path = require('path');
const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
var bodyParser = require('body-parser');
const errorController = require('./controllers/error');   
const mongoConnect = require('./util/database').MongoConnect;
const User = require('./models/user');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

  app.set('view engine', 'ejs');
  app.set('views', 'views');

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser());


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

 app.use((req, res, next) => {
   User.findById("5d9da2781c9d440000421e1d")
   .then(user => {
     req.user = user;
     next();
   })
   .catch(err => {
     console.log(err);
   });
 });

app.use('/admin', adminRouter);
app.use(shopRouter);

//Create 404 error Page
app.use(errorController.get404);

//callback function
mongoConnect(() => {
  app.listen(3000);
});