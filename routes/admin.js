  
const path = require('path');
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

///admin/add-product =>GET
router.get('/add-product', adminController.getAddProduct);

///admin/products =>GET
router.get('/products', adminController.getProduct);

///admin/add-product =>POST
router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditproduct);

module.exports = router;
// exports.routes = router;
// exports.products = products;