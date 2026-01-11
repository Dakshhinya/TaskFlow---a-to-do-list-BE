const {registerUser, loginUser} = require('../services/authService')
const jwt = require('jsonwebtoken')
exports.signup = async(req, res)=>{
    try{
        const newUser = await registerUser(req.body);
        res.send({message : "user created successfully"})
    }
    catch(err){
        console.error("Signup error :",err);
        res.status(400).json({error:err.message})
    }
}

exports.login = async(req, res)=>{
    console.log("Received body", req.body)
    try{
        const validUser = await loginUser(req.body);
        if(!validUser){
            return res.status(400).json({message:"Invalid credentials"})
        }

        const token = jwt.sign(
            {userId:validUser.user_id, email:validUser.email},
            process.env.JWT_SECRET,
            {expiresIn:"7d"}
        );

        res.json({
            message: "Login Successful",
            token,
            username:validUser.username,
            email:validUser.email,
            userId: validUser.user_id  
        })
    }catch(err){
        console.error("User not found", err);
        res.status(400).json({error:err.message})
    }
}

