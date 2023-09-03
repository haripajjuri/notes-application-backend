const User = require('../models/user');
const jwt = require("jsonwebtoken");
const { validateToken } = require('../validateToken');
const cookie = require('cookie-parser');

const register = async(req,res)=>{
    let users;
    try{
        const check = await User.findOne({username:req.body.send.username})
        if(check){
            return res.json({msg:"username already exists"})
        }
        else{
            users = new User({
                username:req.body.username,
                password:req.body.password
            })
            users.save()
            return res.json({msg:"created user"})
        }
    }catch(err){
        console.log(err)
    }
    if(!users){
        return res.status(500).json({msg:"something went wrong"})
    }
    return res.status(200).json({users})
}

const login = async (req,res)=>{
    const user = await User.findOne({username:req.body.send.username})  //req.body.send.username
    if(user){

        if(req.body.send.password==user.password){
            const accessToken = jwt.sign({
                "user":{
                    username: user.username,
                    id:user._id
                }
            },
            "hari1234",
            {expiresIn:"240 m"},
            );
            res.cookie("token",accessToken,{
                httpOnly:true,
                path:"/",
                maxAge: 100*1000
            })
            res.status(200).json({msg:"login accepted"});
        }
        else{
            res.json({msg:"password didnt match"})
        }
    }else{
        res.json({msg:"user not found"})
    }
}

const currentUser = async(req,res)=>{
    try{
        res.json(req.user);
    }catch(err){
        console.log(err);
    }
}


module.exports = {register,login,currentUser}