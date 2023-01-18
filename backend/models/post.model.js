const mongoose = require("mongoose")


const postSchema = mongoose.Schema({
    image:String,
    name:String,
  price:String,
   userID:String

})

const PostModel = mongoose.model("post",postSchema)
module.exports ={
    PostModel
}