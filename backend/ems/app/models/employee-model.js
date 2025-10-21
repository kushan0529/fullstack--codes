 const mongoose =require('mongoose')
 const EmployeeSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    userName:{ 
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
const Employee=mongoose.model('Employee',EmployeeSchema)
module.exports=Employee