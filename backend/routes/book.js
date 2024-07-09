const router = require ("express").Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const Book = require("../models/book");
const {authenticateToken} = require("./userAuth");

router.post("/add-book",authenticateToken, async (req,res) =>{
    try {
        const {id} = req.headers;
        const user = await User.findById(id);
        if(user.role !== "admin"){
            return res.status(400).json({message: "you do not have access to perform admin work"});
        }
        const book = new Book({
            url: req.body.url,
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
            desc: req.body.desc,
            language: req.body.language,
        });
        await book.save();
        res.status(200).json({message: "Book added Successfully"});
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
})
module.exports = router;