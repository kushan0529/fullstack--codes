// // const express = require('express');
// // const { MongoClient , ObjectId} = require('mongodb');  //  ObjectId--> transform data from string to object


// // // es6 object destructuring - helps you to extract properties from an object and make it available as independent variables
// // // const obj = { a:1 , b:2 , c:3 } 
// // // const { c } = obj; // here we are extracting property c from the obj
// // // console.log(c); here c is  available as an independent variable

// // const port = 3075;
// // const app = express();

// // app.use(express.json());

// // // establishing connection to database

// // const client = new MongoClient('mongodb://127.0.0.1:27017');
// // let db;
// // async function configureDB() 
// // {
// //     try { // any operation is showing an error 
// //         await client.connect(); // connect to mongodb software
// //         db = client.db('tasks-app-july25'); // 
// //         console.log('connected to db');
// //     } catch(err){
// //         console.log('error connecting to db',err.message);
// //     }
// // }
// // configureDB();


// // // how to create a record in database


// // app.post('/tasks', async (req,res)=>{
// //     const body =req.body; // const { body } = req;
// //     try{
// //         const task = await db.collection('tasks').insertOne(body);
// //         console.log(task); //acknowledged: true,insertedId: new ObjectId('68cd0644123f969f63727a90')
// //         res.status(201).json({
// //             _id: task.insertedId,
// //             ...body
// //         });

// //     } catch(err){
// //         console.log(err);
// //         res.status(500).json({ error: 'something went wrong!!!'});

// //     }
// // });
// // // list all tasks

// // app.get('/tasks', async (req,res)=>{
// //     try {
// //         const tasks = await db.collection('tasks').find().toArray();
// //         res.json(tasks);

// //     } catch(err){
// //         console.log(err);
// //         res.status(500).json({ error : 'something went wrong!!!'})

// //     }
// // });
// // // find one task

// // app.get('/tasks/:id', async (req,res)=>{

// //     // const id = req.params.id;
// //     const { id } = req.params;
// //     try {
// //         const task = await db.collection('tasks').findOne({ _id: new ObjectId(id) });
// //         if(!task){
// //            return res.status(404).json({});
// //         }
// //         res.json(task);

// //     } catch(err){
// //         console.log(err);
// //         res.status(500).json({ error : 'something went wrong!!!'});

// //     }

// // });

// // // updating the task

// // app.put('/tasks/:id', async (req,res)=>{
// //     const { id } =req.params;  // const id = req.params.id;
// //     const { body } = req;  // const body = req.body
// //     try {
// //         const task = await db.collection('tasks').updateOne({ _id: new ObjectId(id)} , { $set:body});
// //         res.json(task);

// //     } catch(err){
// //         console.log(err);
// //         res.status(500).json({ error : 'something went wrong!!!'});


// //     }

// // })



// // // remove one task

// // app.delete('/tasks/:id', async (req,res)=>{
// //     const { id } = req.params; // const id = req.params.id;
// //     try {
// //         const task = await db.collection('tasks').deleteOne({ _id: new ObjectId(id)});
// //         res.json(task);


// //     } catch(err){
// //         console.log(err);
// //         res.status(500).json({ error : 'something went wrong!!!'});

// //     }

// // });



// // /*


// // app.get('/tasks',(req,res)=>{
// //     res.send("list tasks api")
// // });

// // app.post('/tasks',(req,res)=>{
// //     res.send("create task api")
// // });

// // // app.get('/tasks/:id',(req,res)=>{
// // //     res.send("single task api")
// // // });

// // // app.put('/tasks/:id',(req,res)=>{
// // //     res.send("update task api")
// // // });

// // // app.delete('/tasks/:id',(req,res)=>{
// // //     res.send("remove task api")
// // // }); 

// // // */

// // // app.listen(port,()=>{
// // //     console.log(`server is running on port  ${port}`);
// // // });






// // const express=require("express");
// // const{ MongoClient }=require("mongodb");
// // const app=express();
// // const port=3050;
// // let db;
// // app.use(express.json()) 
// // const client=new MongoClient("mongodb://127.0.0.1:27017")
// // async function connectingDB(){
// //     try{
// //         await client.connect();
// //         db=client.db("kushan-2025");
// //         console.log("connected to database")

// //     } catch(err){
// //         console.log("error connecting to db",err.message);
// //     }
// // }
// // connectingDB()
// // // app.get("/tasks",async(req,res)=>{
// // //     try{
// // //         const tasks=await db.collection('tasks').find().toArray();
// // //         res.json(tasks)
// // //     } catch(err){
// // //         console.log(err);
// // //         res.status(500).json({error:"something went wrong"})
// // //     }
// // // })
// // // app.post("/tasks",async(req,res)=>{
// // //     const body=req.body;
// // //     try{
// // //         const task= await db.collection('tasks').insertOne(body)
// // //         console.log(task);
// // //         res.status(201).json({
// // //             _id:task.insertedId,
// // //             ...body

// // //         })
// // //     } catch(err){
// // //         res.status(500).json({error:"something went wrong"})
// // //     }
// // // })

// // // app.listen(port,()=>{
// // //     console.log("task-server is running on the port"+port)
// // // })


// // const express=require('express');
// // const { MongoClient }=require("mongodb");
// // const app=express();
// // const port=3050;
// // app.use(express.json());
// // let db;
// // const client=new MongoClient("mongodb://127.0.0.1:27017")
// // async function conncetingDB(){
// //     try{
// //         await client.connect();
// //         db=client.db("kushan");
// //         console.log("connected to database")
// //     } catch(err){
// //         console.log(err)
// //     }
// // }
// // conncetingDB();
// // app.get("/tasks",async(req,res)=>{
// //     try{
// //         const tasks=await db.collection('tasks').find().toArray();
// //         res.json(tasks)

// //     } catch(err){
// //         res.status(500).json({error:"something went wrong"})
// //     }
// // })
// // app.post("/tasks",async(req,res)=>{
// //     const body=req.body
// //     try{
// //         const task=await db.collection('tasks').insertOne(body);
// //         console.log(task);
// //         res.status(201).json({
// //             _id:task.insertedId,
// //             ...body
// //         })
// //     } catch(err){
// //         res.status(500).json({error:"something went wrong"})
// //     }
// // })
// // app.listen(port,()=>{
// //     console.log("ťæßķ-server is running on port"+port);
// // })

// const express=require("express");
// const {MongoClient}=require("mongodb");
// const app=express();
// const port=3075;
// let db;
// app.use(express.json);
// const client= new MongoClient("mongodb://127.0.0.1:27017")
// async function conncetingDB(){
//     try{
//         await client.connect();
//         db=client.db("kings")
//         console.log("connected succesfully");
//     }
//     catch(err){
//         console.log(err)

//     }
// }
// conncetingDB();
// app.get("/tasks",async(req,res)=>{
//     try{
//         const tasks=await db.collection('tasks').find().toArray();
//         res.json(tasks)
//     } catch(err){

//     }
// })
// app.post("/tasks",async(req,res)=>{
//     const body=req.body;
//     try{
//         const task=await db.collection('tasks').insertOne(body)
//         console.log(task);
//         res.json({
//             _id:task.insertId,
//             ...body
//         })
//     } catch(err){
//         res.json(500).json("error")
//     }
// })
// app.get("/tasks/:id",async(req,res)=>{
//     const {id}=req.params;
//     try{
//         const task=await db.collection('tasks').findOne({_id:new ObjectId(id)})
//         if(!task){
//             res.status(500).json({error:"Task not found"})
//         }
//         res.json(task)
//     } catch(err){
//         res.status(500).json({error:"something went wrong"})
//     }
// })
// app.put("/tasks/:id",async(req,res)=>{
//     const {id}=req.params;
//     const {body}=req
//     try{
//         const task=await db.collection('tasks').updateOne({_id:new ObjectId(id)})
//     } catch(err){
//         res.status(500).json({error:"s w w"})
//     }
// })
// app.listen(port,()=>{
//     console.log(`serevre is running on port ${port}`)
// })