const express = require("express")
const userRouter = express.Router()
const {UserModel} = require("../models/user.model")
const connection = require("../configure/confige")
const dns = require("dns")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
//Register====================================================>

userRouter.post("/register",async(req,res)=>{
   
    const {email,password,mobile} = req.body
    const userpresent = await UserModel.findOne({email})
    if(userpresent){
        res.json("Already exist,Please login")
    }else{
    try {
        bcrypt.hash(password, 5, async(err, hash)=>{
          
         const user = new UserModel({email,password:hash,mobile})
        await user.save()
        res.json("Hurry, User has been created !!")
        })
        
    }catch (error) {
        console.log(Error)
        res.json("error in register")
    }
}
})

//Login=====================================================>

userRouter.post("/login",async(req,res)=>{
    const {email,password}= req.body
    try {
        const user = await UserModel.find({email})

        if(user.length>0){
          const hashed_pass = user[0].password;
          bcrypt.compare(password, hashed_pass, (err, result)=>{
         if(result){
              const token = jwt.sign({"userID":user[0]._id},'masai'); //{expiresIn:"1h"}
              res.json({"msg":"Login Successfully","token":token})
         }else{
            res.json({"msg":"Login failed"})
         }
        })
           
           }else{
               res.json({"msg":"Wrong Credential"})
               console.log(err)
           }

    } catch (error) {
        console.log(Error)
        res.json("Something went wrong")
    }
})

//about====================================================>

// userRouter.get("/get",async(req,res)=>{
//     const user =await UserModel.find()
//     res.json(user)
// })





module.exports ={
    userRouter
}