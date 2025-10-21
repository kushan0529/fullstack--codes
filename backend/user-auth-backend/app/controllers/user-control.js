const { json } = require("express")
const {User}=require("../models/user-model")
const {UserValidationSchema, userloginValidationSchema}=require('../validaters/user-validaters')
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')
const Usercntrl={}

// Usercntrl.register=async(req,res)=>{
//     const body=req.body;
//     const{error,value}=UserValidationSchema.validate(body,{abortEarly:false})
//     if(error){
//         return res.status(400).json({error:error.details.map(ele=>ele.message)})
//     }
//     try{
//         const alreadyExist=await User.findOne({email:value.email})
//         if(alreadyExist){
//             res.status(400).json({error:"email already exist"})

//         } else{
//         const user=new User(value);
//         const salt=await bcryptjs.genSalt();
//         const hashpassword=await bcryptjs.hash(value.password,salt);
//         user.password=hashpassword;
//         await user.save()
//         res.json(user)
//     }
//     } catch(err){
//         res.json({error : " s  w  w"})
//     }
// }


// Usercntrl.login=async(req,res)=>{
//     const body=req.body;
//     const {error,value}=userloginValidationSchema.validate(body,{abortEarly:false});
//     if(error){
//         return res.status(400).json({error:error.details.map(err=>err.message)});
//     }
//     try{``
//     const userpresent=await User.findOne({email:value.email});
//     if(!userpresent){
//         return res.status(400).json({error:"invalid email"});
//     }
    
//     const isPasswordMatch=await bcryptjs.compare(value.password,userpresent.password);
//     res.json()
//     if(!isPasswordMatch){
//         return res.status(400).json({error:'invalid password'})
//     }
// } catch(err){
//     res.json({error:" s w w"})
// }
//     //generate jwt & send the jwt 
    
//     const tokenData={userId:userpresent.id}
//     const token=jwt.sign(tokenData,process.env.JWT_SECRET,{expiresIn:'1d'})
//     res.json({token:token})
// }

// Usercntrl.account=async(req,res)=>{
//     try{
//     const user=await User.findById(req.userId).select('-password');
    
//     if(!user){
//     return res.status(404).json({error:'something went wrong'})
//     }
//     res.json(user);
// }
//     catch(err){
//         return res.status(500).json({error:"s  w w"})
//     }
// }
// module.exports=Usercntrl

Usercntrl.register=async(req,res)=>{
    const body=req.body
    console.log(res)
    const {error,value}=UserValidationSchema.validate(body,{abortEarly:false})
    if(error){
        return res.status(400).json({error:error.details.map(err=>err.message)})
    }
    try{
        const userAlreadyExist=await User.findOne({email:value.email})
        if(userAlreadyExist){
            return res.status(400).json({error:"user already exist"})
        }
        const user=  new User(value)
        const salt=await bcryptjs.genSalt()
        const hashpassword=await bcryptjs.hash(value.password,salt)
        user.password=hashpassword
        await user.save()
        res.json(user)
        
    } catch(err){
        console.log(err)
        return res.status(400).json({error:"something went wrong"})
    }
}

Usercntrl.login=async(req,res)=>{
    const body=req.body;
    const{error,value}=userloginValidationSchema.validate(body,{abortEarly:false})
    if(error){
        return res.status(400).json({error:error.details.map(err=>err.message)})
    }
    try{
        const userexist=await User.findOne({email:value.email})
        if(!userexist){
            return res.status(404).json({error:"user not found"})
        }
        const isPasswordMatch=await bcryptjs.compare(value.password,userexist.password)
        if(!isPasswordMatch){
            return res.status(400).json({error:"wrong password"})
        }
        const tokenData={userId:userexist.id}
        const token=jwt.sign(tokenData,process.env.JWT_SECRET,{expiresIn:'1d'})
        res.json({token:token})
    } catch(err){
        return res.status(400).json({error:'something went  wrong'},err.message)
    }
}

Usercntrl.account=async(req,res)=>{
    try{
        const user=await User.findById(req.userId).select('-password')
        
        if(!user){
            return res.status(404).json({error:"user-Id not found"})
        }
        return res.json(user)
    }
    catch(err){
        return res.json({error:"s w w"})
    }
}
module.exports=Usercntrl