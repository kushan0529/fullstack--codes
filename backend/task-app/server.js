const express=require("express");
const{MongoClient}=require("mongodb"); //{}=Object destructuring

//es6 - object destructuring - helps you to extract properties from an object
//and makes it available as independent variables
//
const app=express();
const port =3075;
let db;
app.use(express.json())//middle wear
const client = new MongoClient("mongodb://127.0.0.1:27017")

async function configureDB() {
    try{
        await client.connect();//connect to mongodb software
        db=client.db('task-app-july25');//create a project data base
        console.log("conected to datbase")
    } catch(err){
        console.log("error connecting to db ",err.message);
    }
}
configureDB();
/*
types of errors-
reference error - variable or function not found
syntax error -

*/
app.get("/tasks",async(req,res)=>{
   try{
    const tasks=await db.collection('tasks').find().toArray();
    res.json(tasks);

   } catch(err){
    console.log(err);
    res.status(500).json({error:"something went wrong"})
   }
})
app.post("/tasks", async(req,res)=>{
    const body=req.body;
    try{
        const task=await db.collection('tasks').insertOne(body);
        console.log(task);
        res.status(201).json({
            _id: task.insertedId,
            ...body
        })        
    } catch(err) {
        console.log(err);
        res.status(500).json({error:'something went wrong !!'})

    }
})
// app.get("/tasks/:id",async(req,res)=>{
//     const{id}=req.params;
//     try{
//         const task=await db.collection('tasks').findOne()
//     } catch(err){

//     }
// })
app.delete("/tasks/:id",(req,res)=>{
    res.send("remove task api")
})
app.listen(port,() => {
    console.log(`task app server is running on the port${port}`)
})