const express = require('express');
const router = express.Router();

//add Middleware 
// it has 3 arguments like req,res,next
///admin/add-product =>GET
router.get('/add-product',(req, res, next) => {
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title" id="title"><button type="submit">Add Product</button></form>');
});
///admin/add-product =>POST
router.post('/add-product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;