
const Tasks = require('../models/task-model')

const {TaskValidationSchema}=require('../validaters/task-validater')
const taskCtrl={}

taskCtrl.getallTasks=async(req,res)=>{
    try{
        const task=await Tasks.find()
        res.json(task)
    } catch(err){
        res.json({error:"s w w "})
    }
}

taskCtrl.createNew=async(req,res)=>{
    const body=req.body;
    const{error,value}=TaskValidationSchema.validate(body,{abortEarly:false})
    try{
        const task=new Tasks(value)
        await task.save()
        res.json(task)
    } catch(err){
        res.json({error})
    }
}
 
taskCtrl.update=async(req,res)=>{
    const body=req.body;
    const id=req.params.id;
    try{
        const task=await Tasks.findByIdAndUpdate(id,body,{new:true})
        if(!task){
            res.json({error:"not found the id"})
        }
        res.json(task)
    } catch(err){
        res.json({error:"s w  w"})
    }
}
module.exports=taskCtrl


