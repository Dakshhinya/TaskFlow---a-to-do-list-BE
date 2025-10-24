const {registerUser, loginUser} = require('../services/authService')

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
            res.status(400).json({message:"Invalid credentials"})
        }
        res.json(validUser)
    }catch(err){
        console.error("User not found", err);
        res.status(400).json({error:err.message})
    }
}

