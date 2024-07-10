const router = require ("express").Router();
const {authenticateToken} = require("./userAuth");
const Book = require("../models/book");
const Order = require("../models/order");
const User = require("../models/user");

//place order
router.post("/place-order", authenticateToken, async (req,res)=>{
    try {
        const {id} = req.headers;
        const {order} = req.body;
        for(const orderData of order){
            const newOrder = new Order({user: id,book: orderData._id});
            const orderDataFromDb = await newOrder.save();
            //saving order in user model
            await User.findbyIdAndUpdate(id,{
                $push: {orders: orderDataFromDb._id},
            });
            //clearing cart
            await User.findByIdAndUpdate(id,{
                $pull: {cart: orderData._id},
            });
        }
        return res.json({
            status: "Success",
            message: "Order Placed Successflly",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "An error occured"});
    }
});

router.get("/get-order-history", authenticateToken, async (req,res) => {
    try {
        const {id} = req.headers;
        const userdata = await User.findById(id).populate({
            path: "orders",
            populate: {path: "book"},
        });
        const orderData = userData.orders.reverse();
        return res.json({
            status: "Success",
            data: orderData,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "An error occured"});
    }
});

module.exports = router;