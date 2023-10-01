const mongoose=require('mongoose')

const userTemplate={

    name:String,
    email:String,
    password:String
}

const userSchema= mongoose.Schema(userTemplate)

const model= mongoose.model("user",userSchema)

module.exports=model