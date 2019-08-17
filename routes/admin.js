const express = require('express');
const router = express.Router();

//add Middleware 
// it has 3 arguments like req,res,next
router.get('/add-product',(req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title" id="title"><button type="submit">Add Product</button></form>');
});

router.post('/product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;