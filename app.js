const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRouter);

console.log('testing');
//Create 404 error Page
app.use((req, res, next)=> {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
app.listen(3000);//created http server in expressjs