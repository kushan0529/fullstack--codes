const express=require('express');
require('dotenv').config();
const fs=require('fs')
const path=require('path')

const control2=require('./app/controller2/Note-control')
const mongoose=require('mongoose');
const configureDB=require('./config/db');

const port=process.env.PORT ||5000;
const app=express()
app.use(express.json())

const cors=require('cors');
const morgan = require('morgan');
app.use(cors())
app.use(morgan('tiny'))

const authenticateUser=require('./app/middlewares/user-authentication')

const Usercntrl=require('./app/controllers/user-control');

configureDB()
app.get('/api/users/account',authenticateUser,Usercntrl.account)
app.post('/api/users/register',Usercntrl.register)
app.post('/api/users/login',Usercntrl.login)



app.get('/list',authenticateUser,control2.list)
app.get('/show/:noteid',authenticateUser,control2.show)
app.post('/create',authenticateUser,control2.create)
app.put('/update/:id',authenticateUser,control2.update)
app.delete('/delete/:id',authenticateUser,control2.delete)

app.listen(port,()=>{
    console.log("server is running "+port)
})


