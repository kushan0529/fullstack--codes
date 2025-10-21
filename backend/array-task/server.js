const express=require('express');
const { number } = require('joi');
const morgan = require('morgan');
const port=3000;
const app=express()


app.use(express.json())



app.post('/array',(req,res)=>{
    const {numbers}=req.body
    if(!numbers){   
        return res.status(400).json({error:'numbers field cant be empty'})
    }
    if(!Array.isArray(numbers)){
        return res.status(400).json({error:'must be an array'})
    }
    if(numbers.length==0){
        return res.status(400).json({error:'array field cant be empty'})
    }
    const NotANumber=numbers.filter(n=>typeof n !=='number')
        if(NotANumber.length>0){
            return res.status(400).json({error:'element must be a number'})
        }
        const min=Math.min(...numbers)
        const max=Math.max(...numbers)
        let sum=0
        for(i=0;i<numbers.length;i++){
            sum+=numbers[i]
        }
        const average=sum/numbers.length

        res.json({min,max,average})
    
})


app.listen(port,()=>{
    console.log(`server is running on port${port}`)
})