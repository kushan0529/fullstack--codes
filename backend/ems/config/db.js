// const mongoose=require("mongoose")
// require("dotenv").config({ path: __dirname + "/../.env" }); // ✅ load .env correctly


// const connectingDB=async function (){
//     try{
//         await mongoose.connect(process.env.DB_URL,{
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         })
//         console.log("connected to db ✅✅✅")
//     } catch(err){
//         console.error("🖍️ Not connected to MongoDB:",err.message)
//     }
// }
// connectingDB()

// module.exports=connectingDB
const mongoose=require("mongoose")
require("dotenv").config({path:__dirname + "/../.env"});
const connectingDB=async(req,res)=>{
    try{
        await mongoose.connect(process.env.DB_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log("connected to db ")
    } catch(err){
        console.log("not connected")
    }
    
}
connectingDB()
module.exports=connectingDB