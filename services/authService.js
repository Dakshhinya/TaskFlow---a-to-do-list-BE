const createUser = require('../models/signup')
const checkUser = require('../models/login')
const jwt=require("jsonwebtoken");

exports.registerUser = async(userData)=>{
    const user = await createUser(userData)
    return user;
}

exports.loginUser = async(userData)=>{
      console.log("Checking user:", userData);

    const existingUser = await checkUser(userData)
      console.log("Found user:", existingUser);

    if(!existingUser){
        return null;
    }
    // const payload ={
    //     email: existingUser.email,
    //     id:existingUser.id
    // }

    // const token = jwt.sign(payload, process.env.JWT_SECRET,{expiresIn:"1h"})
    // return {
    //     token,
    //     id:existingUser.id,
    //     email:existingUser.email
    // };

    return existingUser;
}
