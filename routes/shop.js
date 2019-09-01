const path = require('path');
const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.js');

// router.get('/',(req, res, next) => {
//     const products = adminData.products;
//     res.render('shop', {prods:products,docTitle:'Shop',path: '/'});
// });
router.get('/', productController.getProducts);

module.exports = router;