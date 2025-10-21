require('dotenv').config();
const fs = require("fs");
const path = require("path");

const express=require("express");
const mongoose=require("mongoose");
const connectingDB = require('./config/db');
const port=process.env.PORT ||5000;

const app=express();
app.use(express.json());
const morgan=require('morgan')
app.use(morgan('tiny'))
app.use(morgan('common',{
    stream:fs.createWriteStream(path.join(__dirname,'access.log'),{flags:'a'})
}))
const cors=require('cors') 
app.use(cors());

const authenticateUser=require("./app/middlewares/authenticate")
const employeesctrl=require('./app/controllers/employees-Ctrl')


connectingDB()
app.get("/api/employees",employeesctrl.listAllemployees)

app.post("/api/employee",authenticateUser,employeesctrl.createNew)

app.put("/api/employee/:id",employeesctrl.update)

app.listen(port,()=>{
    console.log("server is running on port"+port)
})