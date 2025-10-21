const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    userName:String,
    email:String,
    password:String
})
const USER=mongoose.model('USER',userSchema)
module.exports=USER