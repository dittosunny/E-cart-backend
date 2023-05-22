//to define routes for client request,create routes folder and router.js file

//import express
const express = require('express')

//import productController
const productController = require('../controllers/productController')

//import wishlist controller
const wishlistcontroller = require('../controllers/wishlistcontroller')

//import cartcontroller
const cartcontroller= require('../controllers/cartcontroller')


//using express create an object for router class inorder  to setup path
const router   = new express.Router()

//resolving client request
//api-getallproducts request

router.get('/products/all-products',productController.getallproducts)

//api to viewproduct
router.get('/products/view-product/:id',productController.viewproduct)

//api to add to wishlist product
router.post('/wishlist/add-to-wishlist',wishlistcontroller.addtowishlist)

//api to get wishlist product
router.get('/wishlist/get-wishlist',wishlistcontroller.getwishlistitems)

//api to remove wishlist item
router.delete('/wishlist/remove-wishlist-item/:id',wishlistcontroller.removewishlistitems)

//api to add to cart
router.post('/cart/add-to-cart',cartcontroller.addtocart)

//api - to get cart items
router.get('/cart/get-item',cartcontroller.getcart)

//api to remove  item from cart
router.delete('/cart/remove-item/:id',cartcontroller.removecartitems)

//api for increment cart item count
router.get('/cart/increment-count/:id',cartcontroller.incrementcount)

//api call for decrement cart item count
router.get('/cart/decrement-count/:id',cartcontroller.decrementcount)




//export router
module.exports = router