const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');   

const sequelize = require('./util/database');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

  app.set('view engine', 'ejs');
  app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use(shopRouter);

//Create 404 error Page
app.use(errorController.get404);

sequelize.sync().then(result =>{
  console.log(result);
  app.listen(3000);
})
.catch(err => {
  console.log(err);
});

