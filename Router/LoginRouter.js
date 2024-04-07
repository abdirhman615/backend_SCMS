const express=require('express')
const route=express.Router()
const {loginRouter,loginRouterSTD}=require('../Controll/LoginControll')
//login
route.post('/',loginRouter)
route.post('/',loginRouterSTD)


module.exports = route