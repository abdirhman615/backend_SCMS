const mongoose = require("mongoose")

const NewsSchema = new mongoose.Schema({
    New_Name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    dete:{
        type:String,
        required:true
    },
},{timestamps:true})

const NewsModal = mongoose.model("News",NewsSchema)

module.exports=NewsModal

