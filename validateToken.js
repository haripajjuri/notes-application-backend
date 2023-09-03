const jwt = require("jsonwebtoken");

const validateToken = async(req,res,next)=>{
    try{
        const token = req.cookies.token;
        await jwt.verify(token,"hari1234",(err,decode)=>{
                if(err){
                    res.send(err);
                    next();
                }
                req.user = decode.user;
                next();
        })
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {validateToken};