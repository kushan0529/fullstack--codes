const mongoose=require('mongoose')
const USER=require('../model/insurance-model')
const UserValidationSchema=require('../validtaion/insurance-validation')

const userControl={}

userControl.register1=async(req,res)=>{
    const body=req.body;
    const{error,value}=UserValidationSchema.validate
}
