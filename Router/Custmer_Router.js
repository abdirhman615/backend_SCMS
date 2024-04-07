const express = require('express')
const CustmerRouter = express.Router()
const { GETCustmerRouter, POSTCustmerRouter, DELETECustmerRouter, PUTCustmerRouter } = require('../Controll/Custmer_control')

CustmerRouter.get('/', GETCustmerRouter)

CustmerRouter.post('/', POSTCustmerRouter)

CustmerRouter.put('/:id', PUTCustmerRouter)

CustmerRouter.delete('/:id', DELETECustmerRouter)

module.exports = CustmerRouter
