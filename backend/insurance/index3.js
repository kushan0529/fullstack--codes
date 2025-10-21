const express=require('express')
const mongoose=require('mongoose');
const dotenv=require('dotenv')
require('dotenv').config;
const fs=require('fs');
const path=require('path')
const morgan=require('morgan')
const cors=require('cors')
const control=require('./app/controll/insurance-control')


const db=require('./config/db')
const app=express()
app.use(express.json);
const port=process.env.PORT
app.use(cors())
app.use(morgan('tiny'))


db()

app.get('/api/users',control.showall)
app.post('/api/user',control.createOne)
app.get()


app.listen(port,()=>[
    console.log("server is running on port"+port)
])