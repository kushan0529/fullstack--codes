const express=require("express");
const mongoose=require('mongoose');
const app=express()

const dotenv=require("dotenv")
dotenv.config()
const fs =require('fs') 
const path=require('path')

const configureDB=require('./config/db')

const morgan=require('morgan')
app.use(morgan('tiny'))
const port=process.env.PORT ||5000
 
const cors=require("cors")
app.use(cors)
app.use(express.json())

const taskctrl=require("./app/controllers/task-controller")
configureDB()

app.get("/api/tasks",taskctrl.getallTasks)

app.post("/api/tasks",taskctrl.createNew)

app.get("/api/tasks",taskctrl.update)

app.listen(port,()=>{
    console.log("server is runnning on port"+port)
})

/*
require('dotenv').config();
// loads environment variables form a .env file into process.env
const express = require('express'); //npm install express

const configureDB = require('./config/db');

const employeeControler = require('./app/controllers/employee-controler');

const authenticateUser = require('./app/middlewares/authunticate');

const morgan = require('morgan');// npm install morgan
const fs = require('fs');
const path = require('path');

const cors = require('cors');/// npm install cors
const app = express();
const port = process.env.PORT || 5000
app.use(express.json());// inbuilt middelware + application

app.use(morgan('tiny'));
//application level + 3rd party
app.use(morgan('common', {
  stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
}))

this for login
app.use((req,res,next) =>{
    console.log(`${req.method} - ${req.url} - ${req.ip} - ${new date()}`)
})

app.use(cors()); // 3rd partt package middleware + application bcs add to app.use();
/*
this for cors error;
app.use((req,res,next) =>{
    console.log(res.setHeader('Access-Control-Allow-Origin','*'));
    next();
})



configureDB();

//retrive all employees
app.get('/api/employees', employeeControler.list);
app.get('/api/employees/:empId', employeeControler.show);
app.post('/api/employees',authenticateUser, employeeControler.create);
app.put('/api/employees/:empId', employeeControler.update);
app.delete('/api/employees/:empId',employeeControler.delete);

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})

*/