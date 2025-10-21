const express=require("express");
const app=express();
const port=3000;
app.get("/",(req,res)=>{
    res.status(200).send("welcome to the website");
})

app.get("/contact",(req,res)=>{
    res.status(200).send("email-kumarkushan032@gmail.com")
})
const users=[
    {id:1,name:"deep"},
    {id:2,name:"kushan"}
]
app.get("/users",(req,res)=>{
    res.json(users)
})
app.listen(port,()=>{
    console.log("server is running on th port"+port)
})
