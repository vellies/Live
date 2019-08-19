const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use(shopRouter);

//Create 404 error Page
app.use((req, res, next)=> {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
console.log('Started Here');
app.listen(3000);//created http server in expressjs