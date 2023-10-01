const express=require('express')
const router=express.Router()
const tweetsModel=require('../models/twitterModel')
const { default: mongoose } = require('mongoose')

router.get('/',async(req,res)=>{ 
    const tweets =await tweetsModel.find()
    res.json({message:"user added successfully",data:tweets})





})
module.exports=router