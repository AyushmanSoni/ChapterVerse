const router = require ("express").Router();
const User = require("../models/user");
const bcryptjs = require("bcryptjs");
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

        const hashPass = await bcryptjs.hash(password,10);
        const newUser = new User ({
            username:username,
            email:email,
            password:hashPass,
            address:address
        });
        await newUser.save();
        return res.status(200).json({message: "SignUp Successfully"});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: "Internal server error"});
    }
});
//Sign In
router.post("/sign-in",async (req, res) => {
    try {
       const{username,password} = req.body;

       const exixtingUser = await User.findOne({username});
       
       if(!exixtingUser){ //agar user hai hi to invalid direct
        res.status(400).json({message: "Invalid Credentials"});
       }

       await bcryptjs.compare(password,exixtingUser.password,(err,data)=>{
        if(data){ //agar enter kiya hu data hamre database se match kar jata hai to sign in success
            res.status(200).json({message: "Sign In Successfully"});
        }
        else { // hum user ko nhi bata rahe hai ki tumne username ya password galat bhara just telling invalid credentials
            res.status(400).json({message: "Invalid Credentials"});
        }
       })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: "Internal server error"});
    }
});
module.exports = router;