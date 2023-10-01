const mongoose=require('mongoose')

const tweetsTemplate={

    userImage:String,
    name:String,
    userName:String,
    description:String,
    image:String,
    timeStamp:String
}

const tweetsSchema= mongoose.Schema(tweetsTemplate)

const tweetsModel= mongoose.model("tweets",tweetsSchema)

module.exports=tweetsModel