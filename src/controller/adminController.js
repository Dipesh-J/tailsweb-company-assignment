const adminModel = require('../model/adminModel')
const bcrypt = require('bcrypt')

exports.registerAdmin = async (req,res)=>{
    // The user will provide his data in request body and here we are destructuring it.
    let {adminName, email, password} = req.body
    
    // Here we are encrypting our password to store inside the DB
    let salt = await bcrypt.genSalt(10)
    let hashpass = await bcrypt.hash(password, salt)

    req.body.password = hashpass

    const register = await adminModel.create(req.body)
    return res.status(201).send({message:"Admin created successfully",data: register})
}

exports.login = async (req,res)=>{
    // User provides credentials through request body
    let {email,password} = req.body

    const userCheck = await adminModel.findOne({email})
    if(!userCheck) return res.status(404).send({message:"User not found"})
    
    // Comparing and checking the password provided by the user
    let checkpass = await bcrypt.compare(password, userCheck.password)
    if(!checkpass) return res.status(401).send({message:"Incorrect Password"})
    
    //Creating json web token
    let token = jwt.sign({userId:userCheck._id},process.env.SECRET_KEY,{expiresIn:"1d"})

    res.setHeaders("x-api-key",token)  // setting the token into response header (for frontend to handle how to provide token in request header)
    
    return res.status(200).send({token:token})
}