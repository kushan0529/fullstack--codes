const authenticateUserr=(req,res,next)=>{
    const secret=req.header["authentication"];
    if(secret===process.env.SECRET_KEY){
        next()
    }
    res.status(400).json({error:"secret_key is wrong"})
}

module.exports=authenticateUserr 