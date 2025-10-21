const mongoose=require('mongoose')
const TaskSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{ 
        type:String,
        required:true
    }
})
const Task=mongoose.model('Task',TaskSchema)
module.exports=Task