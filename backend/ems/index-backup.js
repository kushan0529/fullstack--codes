// // const express=require("express");
// // const mongoose =require('mongoose');
// // const { type } = require("os");
// // const app=express();
// // const port=4040;
// // app.use(express.json())
// // async function configureDB(){
// //     try{
// //         await mongoose.connect('mongodb://127.0.0.1:27017/ems-july25');
// //         console.log("connected to db ✅ ")
// //     } catch(err){
// //         console.log('error connecting to db',err)
// //     }
// // }
// // configureDB();
// // const EmployeeSchema=new mongoose.Schema({
// //     firstName:{
// //         type:String,
// //         required:true
// //     },
// //     userName:{
// //         type:String,
// //         required:true
// //     },
// //     email:{
// //         type:String,
// //         required:true
// //     },
// //     mobile:{
// //         type:String,
// //         required:true
// //     }
// // })
// // const Employee=mongoose.model('Employee',EmployeeSchema)
// // app.get('/api/employees',async(req,res)=>{
// //     try{
// //         const employees=await Employee.find();
// //         res.json(employees);
// //     } catch(err){
// //         console.log(err);
// //         res.status(500).json({error:'something went wrong!!'})
// //     }
// // })
// // app.post("/api/employees",async(req,res)=>{
// //     const body= req.body;
// //     try{
// //         const emp=new Employee(body);
// //         await emp.save();
// //         res.json(emp)
// //     } catch(err){
// //         res.status(500).json({error:'s w w'})
// //     }
// // })
// // app.get('/api/employees/empId',async (req,res)=>{
// //     const empId=req.params.empId;
// //     try{
// //         const employee=await Employee.findById(empId);
// //         if(!employee){
// //             return res.status(404).json({})
// //         }
// //         res.json(employee);
// //     } catch(err){
// //         res.status(500).json({error:'s w w'})
// //     }
// // })

// // app.listen(port,()=>{
// //     console.log(`server is running on the port ${port}`)
// // })




// const express=require('express');
// const {mongoose}=require("mongoose");
// const{type}=require('os');
// const app=express();
// const port=4040;
// app.use(express.json())
// async function connectingDB(){
//     try{
//         await mongoose.connect("mongodb://127.0.0.1:27017/kushan-22")
//     console.log("connected to db ✅")
//     } catch(err){
//         console.log("s w w")
//     }
// }
// connectingDB()
// const EmployeeeSchema=new mongoose.Schema({
//     firstName:{
//         type:String,  
//     },
//     userName:{
//         type:String
//     },
//     mobile:{
//         type:String
//     }
// })
// const Employee=mongoose.model("Employee",EmployeeeSchema)

// app.get("/api/employees",async(req,res)=>{
//     try{
//         const employees=await Employee.find()
//         res.json(employees)
//     } catch(err){
//         res.json({error:"s w w "})
//     }
// })
// app.post("/api/employees",async(req,res)=>{
//     const body=req.body;
//     try{
//         const employee=await Employee.insertOne(body)
//         res.json(employee)
//     } catch(err){
//         res.josn({error:"s w w "})
//     }
// })

// app.listen(port,()=>{
//     console.log(`ems server is running on the port${port}`)
// })
const express=require("express");
const {mongoose}=require("mongoose");
const {type}=require('os');
const port=4040;
const app=express();
app.use(express.json());
async function connectingDB(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/new-3")
        console.log("connected to db ✅✅✅")
    } catch(err){
        console.log("not connected  🖍️")
    }
}
connectingDB()
const employeeSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    gmail:{
        type:String,
        required:true
    }
})
const Employee=mongoose.model("Employee",employeeSchema)
app.get("/api/employees",async(req,res)=>{
    try{
        const employees=await Employee.find()
        res.json(employees)
    } catch(err){
        res.json({error:"s w w"})
    }
})
app.post("/api/employee",async(req,res)=>{
    const body=req.body
    try{
        const employee=new Employee(body)
        await employee.save()
        res.json(employee)
    
    } catch(err){
        res.json({error:"s w w"})
    }
})
app.get("/api/employee",async(req,res)=>{
  
})

app.listen(port,()=>{
    console.log("server is running on port"+port)
})