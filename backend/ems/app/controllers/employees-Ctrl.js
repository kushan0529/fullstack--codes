const Employee=require('../models/employee-model')
const {employeevalidationSchema}=require('../validaters/emp-validators')
const employeesctrl={}
employeesctrl.listAllemployees=async(req,res)=>{  //get
    try{
        const employees=await Employee.find()
        res.json(employees)
    } catch(err){
        res.json({error:"s w w"})
    }
}
 

employeesctrl.createNew=async(req,res)=>{      //post
    const body=req.body
    const {error,value}=employeevalidationSchema.validate(body,{abortEarly:false})
    if(error){
        return res.status(400).json({error})
    }
    try{
        const employee=new Employee(value)
        await employee.save()
        res.json(employee) 
    
    } catch(err){
        res.json({error:"s w w"})
    }
}


employeesctrl.update=async(req,res)=>{      //put
    const body=req.body;
    const id=req.params.id;
    try{

        const update1=await Employee.findByIdAndUpdate(id,body,{new:true})
        res.json(update1)
    } catch(err){
        res.json({error:" s w w"})
    }
}

employeesctrl.delete=async(req,res)=>{
    const id=req.params.id;
    try{
        const emp=await Employee.findByIdAndDelete(id)
        res.json(emp)
    } catch(err){
        res.json({error:"s w w"})
    }
}
module.exports=employeesctrl