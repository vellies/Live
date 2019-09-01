  
const path = require('path');
const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.js');


router.get('/add-product', productController.getAddProduct);
///admin/add-product =>POST
router.post('/add-product', productController.postAddProduct);

module.exports = router;
// exports.routes = router;
// exports.products = products;