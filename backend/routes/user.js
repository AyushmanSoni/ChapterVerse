const router = require ("express").Router();
const User = require("../models/user");

//Sign Up
router.post("/sign-up",async (req, res) => {
    try {
       
        const {username,email,password,address}= req.body;
        console.log("Received request:", { username, email, password, address });
        
        //check username length is more than 4
        if(username.length<4){
            return res.status(400).json({message: "Username length should be greater than 3"});
        }


        // //check usernamer already exixts ?
        const existingUsername = await User.findOne({username : username});
        if(existingUsername){
            return res.status(400).json({message: "Username already exists"});
        }
        
        // //check usernamer already exixts ?
        const existingEmail = await User.findOne({email : email});
        if(existingEmail){
            return res.status(400).json({message: "Email already exixts"});
        }
        
        // //check password length 
        if(password.length <= 5){
            return res.status(400).json({message: "Password length should be greater than 5"});
        }
        // console.log("Password length is valid");
        const newUser = new User ({
            username:username,
            email:email,
            password:password,
            address:address
        });
        await newUser.save();
        return res.status(200).json({message: "SignUp Successfully"});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: "Internal server error"});
    }
});

module.exports = router;