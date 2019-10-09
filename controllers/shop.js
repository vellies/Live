const Product = require('../models/product');
// const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.fetchAll().then(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  }).catch(err=>{
    console.log(err);
  });
  
}

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  // Product.findAll({ where: { id: prodId} })
  // .then(products => {
  //   res.render('shop/product-detail', {
  //     product: products[0],
  //     pageTitle: products[0].title,
  //     path:'/products'
  //   });
  // })
  // .catch(err => {
  //   console.log(err);
  // });
  // console.log(prodId);
  Product.findByPk(prodId)
  .then(product=>{
    // console.log(product);
  res.render('shop/product-detail', {
    product: product,
    pageTitle: product.title,
    path:'/products'
  });
  })
  .catch(err=>console.log(err));
  // res.redirect('/');
}

exports.getIndex = (req, res, next) => {
  Product.fetchAll().then(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  }).catch(err=>{
    console.log(err);
  });
}

exports.getCart = (req, res, next) => { 
     console.log(req.user.cart);
  req.user.getCart()
  .then(cart => {
    return cart.getProducts()
    .then(products => {
       res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: products
      });     
    })
    .catch(err => {
      console.log(err);
    });
  })
  .catch(err => {
    console.log(err);
  });
  // Cart.getCart(cart => {
  //   Product.fetchAll(products => {
  //     // console.log(products);
  //     const cartProducts = [];
  //     for (product of products) {
  //       const cartProductData=cart.products.find(prod => prod.id === product.id);
  //       // console.log('cartProductDataNew',cartProductData);
  //       if(cartProductData){
  //         cartProducts.push({productData: product, qty: cartProductData.qty});
  //       }
  //     }
  //     // console.log('A', cartProducts);
  //     res.render('shop/cart', {
  //       path: '/cart',
  //       pageTitle: 'Your Cart',
  //       products: cartProducts
  //     });
  //   });
    
  // });

}

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId).then(product => {
    return req.user.addToCart(product);
  })
  .then(result => {
    console.log(result);
  })
  .catch(err => { console.log(err) });
  // Product.findById(prodId, product => {
  //   console.log(product.price);
  //   Cart.addProduct(prodId, product.price);
  // });
  // res.redirect('/cart');
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product =>{
    console.log(product);
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
  
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
}

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
}