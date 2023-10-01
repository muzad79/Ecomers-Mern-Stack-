const router=require('express').Router()
const jwt=require('jsonwebtoken')
const userModel=require('../models/userModel')
router.post('/',async(req,res)=>{
    try{
    const{email,password}=req.body
const currentUser= await userModel.findOne({email} &&{password})

if(currentUser){
const token=jwt.sign({
    userId:currentUser.name.toString()
},"adnan07",{
    expiresIn:'1h',
})
res.status(200).json({token})

}
else{
    res.status(404).json({message:"invalid credentials"})  
}
    }
    catch(error){
        console.log(error)
    }
})

module.exports=router