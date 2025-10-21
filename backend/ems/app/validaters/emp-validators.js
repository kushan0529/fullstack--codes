const joi=require('joi')
const employeevalidationSchema=joi.object({
    firstName:joi.string().trim().pattern(/^[a-zA-Z]+$/).required(),
    lastName:joi.string().trim().pattern(/^[a-zA-Z]+$/).required(),
    userName:joi.string().trim().required(),
    email:joi.string().trim().email().required(),
    mobile:joi.string().trim().pattern(/^[0-9]*$/).min(10).max(10).required()
});

module.exports={
    employeevalidationSchema:employeevalidationSchema,
    
}
  