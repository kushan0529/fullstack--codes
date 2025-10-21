const joi=require('joi');
const TaskValidationSchema=joi.object({
    firstName:joi.string().trim().pattern(/^[a-zA-Z]+$/).required(),
    email:joi.string().trim().email().required(),
    mobile:joi.string().trim().pattern(/^[0-9]*$/).required()
})



module.exports={
    TaskValidationSchema:TaskValidationSchema
} 