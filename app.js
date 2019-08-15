const express = require('express');
const app = express();

//add Middleware 
// it has 3 arguments like req,res,next
app.use((req, res, next) => {
    console.log('Test Next Function');
    next();//allow the requestto continue to the next middleware in line
});

app.use((req, res, next) => {
    console.log('This is second Middleware');
    res.send('Hello From Express');//like express github lib file html
});

app.listen(3000);//created http server in expressjs