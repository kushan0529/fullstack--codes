const joi =require('joi')

const validationSchema=joi.object({
    userName:joi.string().required(),
    email:joi.string().required(),
    password:joi.string.required()

})

const loginvalidationSchema=joi.object({
    email:joi.string().required(),
    password:joi.string.required()

})

module.exports={
    validationSchema:validationSchema,
    loginvalidationSchema:loginvalidationSchema
}