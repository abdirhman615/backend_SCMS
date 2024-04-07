/* eslint-disable no-unused-vars */
const express = require('express')
const GETNewsRouter = express.Router()
const POSTNewsRouter = express.Router()
const DELETENewsRouter = express.Router()
const PUTNewsRouter = express.Router()
const NewsModal = require('../Models/News_modal')
const bcrypt = require('bcrypt')
//GET News
GETNewsRouter.get('/', async (req, res) => {
  const AllNews = await NewsModal.find()
  res.json({ AllNews })
})
GETNewsRouter.get('/:id', async (req, res) => {
  const Newsbyid = await NewsModal.findById()
  res.json({ Newsbyid })
})




POSTNewsRouter.post('/', async (req, res) => {
  try {
    const newNews = new NewsModal(req.body)
    await newNews.save()
    res.send({ status: (200), message: 'successfully Add' })
  } catch (error) {
    res.status(400).send(error.message)
    console.log(error.message)
  }
})

PUTNewsRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const updatedData = await NewsModal.findByIdAndUpdate(id, {
      New_Name: req.body.New_Name,
      description: req.body.description,
      dete: req.body.dete,
    }, { new: true })

    res.send({ status: (200), message: 'successfully updated' })
  } catch (error) {
    res.status(400).send(error.message)
  }
})

DELETENewsRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    await NewsModal.findByIdAndDelete(id)

    res.send({ status: (200), message: 'successfully deleted' })
  } catch (error) {
    res.status(400).send(error.message)
  }
})

module.exports = { GETNewsRouter, DELETENewsRouter, PUTNewsRouter, POSTNewsRouter }
