const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');

products = [];
//add Middleware 
// it has 3 arguments like req,res,next
///admin/add-product =>GET
router.get('/add-product', (req, res, next) => {
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product', formsCSS: true, productCSS: true, activeAddProduct: true });
  });
///admin/add-product =>POST
router.post('/add-product',(req, res, next) => {
    // console.log(req.body);
    products.push({ title: req.body.title });
    res.redirect('/');
});

// module.exports = router;
exports.routes = router;
exports.products = products;
