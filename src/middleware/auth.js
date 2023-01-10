const jwt = require('jsonwebtoken')

exports.authentication = async (req,res,next)=>{

    let token = req.header("x-api-key")

    jwt.verify(token,process.env.SECRET_KEY,(err,decodedToken)=>{
        if(err) {
            return res.status(401).send({message:err.message})
        }
        else{
            req.identity = decodedToken.userId 
            next()
        }
    })
}

exports.authorisation = async (req,res,next) => {
    
}