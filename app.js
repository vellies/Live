const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');   
const mongoConnect = require('./util/database');



// const adminRouter = require('./routes/admin');
// const shopRouter = require('./routes/shop');

  app.set('view engine', 'ejs');
  app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

 app.use((req, res, next) => {
  //  User.findByPk(1)
  //  .then(user => {
  //    req.user =user;
  //    next();
  //  })
  //  .catch(err => {
  //    console.log(err);
  //  });
 });

// app.use('/admin', adminRouter);
// app.use(shopRouter);

//Create 404 error Page
app.use(errorController.get404);

//callback function
mongoConnect(client => {
  console.log(client);
  app.listen(3000);
});