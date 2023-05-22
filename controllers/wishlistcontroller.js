//import wishlist collection
const wishlists = require('../models/wishlistSchema')

//logic for add to wishlist

exports.addtowishlist = async(req,res)=>{
    //get product details from request

    //using  destructuring property of javascript
    const{id,title,price,image}=req.body

    //logic
    try {
        //check if the product in the mongodb
        const item = await wishlists.findOne({id})

        if(item){
            res.status(403).json("Item Already exists in wishlist")
        }
        else{
            //add item to wishlist
            const newproduct = new wishlists({id,title,price,image})
            //to store object in mongodb
            await newproduct.save()
            res.status(200).json("product added to wishlist")
        }
    } catch (error) {
        res.status(401).json(error)

    }

}

//get wishlist data - logic

exports.getwishlistitems = async(req,res)=>{
    //logic
    try {
        //get all wishlist items from the mongodb
        const allwishlistitems = await wishlists.find()
        res.status(200).json(allwishlistitems)
    } 
    catch (error) {
        res.status(401).json(error)
    }
}

//remove wishlist items - logic

exports.removewishlistitems = async (req,res)=>{
    //get id from the request//destructuring
    const{id}=req.params
    try {
        const removewishlistitem = await wishlists.deleteOne({id})
        if(removewishlistitem.deletedCount!=0){
            //get all wishlist item after removing particular wishlist item
            const allwishlists = await wishlists.find()//remaining wishlist item
            res.status(200).json(allwishlists)
        }
        else{
            res.status(404).json("item not found")
        }

    } 
    catch (error) {
        res.status(401).json(error)
    }
}












