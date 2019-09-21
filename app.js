const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');   

const sequelize = require('./util/database');

const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

  app.set('view engine', 'ejs');
  app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

 app.use((req, res, next) => {
   User.findByPk(1)
   .then(user => {
     req.user =user;
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

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, {through: CartItem});
Product.belongsToMany(Cart, {through: CartItem});

 
sequelize
// .sync({ force: true })
.sync()
.then(result =>{
  // console.log(result);
  return User.findByPk(1);
})
.then(user => {
  if (!user){
    return User.create({name: 'vellies', email: 'vellies6113@gmail.com'})
  }
  return user;
})
.then(user => {
  // console.log(user);
  return user.createCart();
  
})
.then(cart => {
  app.listen(3000);
})
.catch(err => {
  console.log(err);
});

