const mongoose=require("mongoose")
require("dotenv").config({path: __dirname+"/../.env"})
const configureDB=async(req,res)=>{
    try{
        await mongoose.connect(process.env.DB_URL)
        console.log("connected to db ✅")
    } catch(err){
        console.log("not connected",err.message)
    }
}
configureDB()
module.exports=configureDB
 