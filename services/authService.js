const createUser = require('../models/signup')
const checkUser = require('../models/login')
const jwt=require("jsonwebtoken");
const bcrypt = require('bcrypt');


exports.registerUser = async({username, email, password})=>{
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await createUser({
    username,
    email,
    password: hashedPassword
  });
    return user;
}

exports.loginUser = async({email, password})=>{
      console.log("Checking user:", {email});

    const existingUser = await checkUser(email)
      console.log("Found user:", existingUser);

    if(!existingUser){
        return null;
    }
    const isMatch = await bcrypt.compare(password, existingUser.password);

  if (!isMatch) {
    return null;
  }

    return existingUser;
}
