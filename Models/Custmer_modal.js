const mongoose = require("mongoose")
const joi = require('joi')
mongoose.pluralize(null)
const CustmerSchema = new mongoose.Schema({

Custmer_name:{
    type:String,
    required:true
},
phone:{
    type:Number,
    required:true
},
Address:{
    type:String,
    required:true
},
username:{
    type:String,
    required:true
},
Password:{
    type:String,
    required:true
},

},{timestamps:true})

const CustmerModal = mongoose.model("Custmer",CustmerSchema)

const CusRegValidate = (userData) => {
    const user = joi.object({
    Custmer_name: joi.string().required(),
    Password: joi.string().required().min(3),
    phone: joi.string().required(),
    Address: joi.string().required(),
    username: joi.string().required(),
    })
    return user.validate(userData)
  }

  const CusLoginValidate = (userData) => {
    const user = joi.object({
        username: joi.string(),
        Password: joi.string().min(3)
    })
    return user.validate(userData)
  }

module.exports={CustmerModal,CusLoginValidate ,CusRegValidate};

