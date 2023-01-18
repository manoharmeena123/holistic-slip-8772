const express = require("express")
const postRouter = express.Router()
const {PostModel} = require("../models/post.model")

// const { authenticate } = require("../middleware/auth");
// const {logger} = require("../middleware/logger")


//GET==============================================================================================================================================>

postRouter.get("/get",async(req,res)=>{
    try {
          const data = await PostModel.find()
    res.json(data)
        
    } catch (error) {
        res.json(error)
    }
  
})

//GET Device========================================>
postRouter.get("/getdevice",async(req,res)=>{
    const device = req.query.device
    try {
        //   const data = await PostModel.find({status:{$regex: status, $options:'i'}})
          const data = await PostModel.find({device:device})
    res.send(data)
        
    } catch (error) {
        res.json(error)
    }
  
})

//GET device&body======================================>
postRouter.get("/set",async(req,res)=>{
    const device = req.query.device
    const body = req.query.body
    try {
          const data = await PostModel.find({device:device,body:body})
    res.send(data)
        
    } catch (error) {
        res.json(error)
    }
  
})

//GETbyId=============================================>
postRouter.get("/getone/:todoID", async (req, res) => {
    try {
          const todoID = req.params.todoID
    const todo = await PostModel.findOne({_id:todoID})
    res.send(todo)
    } catch (error) {
        res.json(error)
    }
  
})
 
// //Filtered=============================================>
// postRouter.get("/filter",async(req,res)=>{
//     const status = req.query.status

//     try {
//           const data = await PostModel.find().sort({status:-1})
//     res.send(data)
        
//     } catch (error) {
//         res.json(error)
//     }
  
// })



//POST================================================================================================================================================>

postRouter.post("/create",async(req,res)=>{
    const payload = req.body
    try {
        const data = new PostModel(payload)
    await data.save()
    res.send("Data Posted Successfully")
    } catch (error) {
        console.log(Error)
        res.send("error in Post")
    }
})


//PATCH===============================================================================================================================================>

postRouter.patch("/update/:todoID",async(req,res)=>{
    const todoID = req.params.todoID
    const userID = req.body.userID
    const payload = req.body
    const todo = await PostModel.findOne({_id:todoID})
    try {
        if(userID!==todo.userID){
            res.send("You are not Authorized for updating")
        }else{
             const data = await PostModel.findByIdAndUpdate({_id:todoID},payload)
            res.send("Data Updated Successfully")
            console.log(data)
        }
       
    } catch (error) {
        console.log(Error)
        res.send("error in patch")
    }
})

//DELETE================================================================================================================================================>

postRouter.delete("/delete/:todoID", async (req, res) => {
    const todoID = req.params.todoID
    const userID = req.body.userID
    const todo = await PostModel.findOne({_id:todoID})
    if(userID !== todo.userID){
        res.send("Not authorised for Deleting")
    }
    else{
        await PostModel.findByIdAndDelete({_id : todoID})
        res.send({"msg" : "Deleted successfully"})
    }
})



// postRouter.use(logger)

module.exports ={
    postRouter
}