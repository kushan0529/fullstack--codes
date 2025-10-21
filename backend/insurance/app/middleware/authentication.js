const authenticateUser=(req,res,next)=>{
    const secret=req.headers['Authorization']; //sent from front_end
    if(secret === process.env.SECRET_CODE ){
        next();
    } else{
        res.status(403).json({error:"Accesss denied. Invalid secret key."})
    }
}

module.exports=authenticateUser
//kk