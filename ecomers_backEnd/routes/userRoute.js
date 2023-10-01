const express=require('express')
const router=express.Router()
const userModel=require('../models/userModel')
const { default: mongoose } = require('mongoose')

router.get('/',(req,res)=>{
    res.send("hello from user route")

})
router.post('/',async(req,res)=>{
    try{
    const {name,email,password}=req.body
    const existingUser= await userModel.findOne({email})
    if(existingUser){
        res.status(404)
        res.json({message:"user exists already"})
    }
    else{
    const user= new userModel({
        name:name,
        email:email,
        password:password
    })
    user.save()
    res.status(200)
    res.json({message:"user added successfully"})
}
    }
    catch(error){
        console.log(error)
    }


})



module.exports=router