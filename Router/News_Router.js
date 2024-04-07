const express = require('express')
const NewsRouter = express.Router()
const { GETNewsRouter, POSTNewsRouter, DELETENewsRouter, PUTNewsRouter } = require('../Controll/News_control')

NewsRouter.get('/', GETNewsRouter)

NewsRouter.post('/', POSTNewsRouter)

NewsRouter.put('/:id', PUTNewsRouter)

NewsRouter.delete('/:id', DELETENewsRouter)

module.exports = NewsRouter
