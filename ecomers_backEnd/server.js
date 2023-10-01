const e = require('express')
const express=require('express')
const app=express()
const cors=require('cors')
const userRouter=require('./routes/userRoute')
const loginRouter=require('./routes/login')
const tweetsRouter=require('./routes/tweets')
const mongoose=require('mongoose')
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb://0.0.0.0:27017/twitter")


app.use('/user',userRouter)
app.use('/login',loginRouter)
app.use('/tweets',tweetsRouter)
app.get('/',(req,res)=>{
res.send("hello")

})






app.listen(3000,()=>{
    console.log("server is running at http://localhost:3000")
})