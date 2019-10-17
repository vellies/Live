const path = require('path');
const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');   
const mongoConnect = require('./util/database').MongoConnect;
// const User = require('./models/user');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

  app.set('view engine', 'ejs');
  app.set('views', 'views');

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser());


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//  app.use((req, res, next) => {
//    User.findById("5d9dee281c9d44000081a2ad")
//    .then(user => {
//      req.user = new User(user.name, user.email, user.cart, user._id);
//      next();
//    })
//    .catch(err => {
//      console.log(err);
//    });
//  });

app.use('/admin', adminRouter);
app.use(shopRouter);

//Create 404 error Page
app.use(errorController.get404);

//callback function
mongoose
.connect(
  'mongodb+srv://vellies:vellies113.@live01-jjkmg.mongodb.net/Live?retryWrites=true&w=majority'
  )
  .then(result=>{
    app.listen(3000)
  })
  .catch(err=>{
    console.log(err);
  });
