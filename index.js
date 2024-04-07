const express = require('express')
require('dotenv').config()
const cors = require('cors')
const App = express()
App.use(express.json())
const DbConnect = require('./DbConfig')
DbConnect()
// App.use(cors())
App.use(cors({ origin: ['http://localhost:5173','http://localhost:5174',,'https://bata-hous-frontend.vercel.app'] }))
 const CustmerRouter = require('./Router/Custmer_Router') 
 const NewsRouter = require('./Router/News_Router')
 const userRouter = require('./Router/User_Router')
 const loginRouter = require('./Router/LoginRouter')
 

App.listen(5000, () => {
  console.log('server started')
})
// localhost:3000/
App.get('/', (req, res) => {
  res.json('Ku so dawaaw Serverkena')
})

 App.use('/Custmer', CustmerRouter)
 App.use('/News', NewsRouter)
 App.use('/User', userRouter)
 App.use('/Login', loginRouter)

module.exports = App
