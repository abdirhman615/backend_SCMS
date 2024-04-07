/* eslint-disable no-unused-vars */
const express = require('express')
const GETCustmerRouter = express.Router()
const POSTCustmerRouter = express.Router()
const DELETECustmerRouter = express.Router()
const PUTCustmerRouter = express.Router()
const {CustmerModal,CusRegValidate} = require('../Models/Custmer_modal')

// GETCustmerRouter.get('/', async (req, res) => {
//     const AllCustmer = await CustmerModal.find().populate([{
//         path:"Complain_id",
//         model:"Complain",
//         select:"Description Complain_date Status"
    
//     }
// ])
//     res.json({AllCustmer})
// })
GETCustmerRouter.get('/', async (req, res) => {
  const AllCustmer = await CustmerModal.find()
  res.json({ AllCustmer })
})

GETCustmerRouter.get('/:id', async (req, res) => {
  const Custmerbyid = await CustmerModal.findById()
  res.json({ Custmerbyid })
})

POSTCustmerRouter.post('/', async (req, res) => {
  try {
    const newCustmer = new CustmerModal(req.body)
    await newCustmer.save()
    res.send({ status: (200), message: 'successfully Add' })
  } catch (error) {
    res.status(400).send(error.message)
    console.log(error.message)
  }
})
// POSTCustmerRouter.post('/', async (req, res) => {
//   try {
//     const { error } = CusRegValidate(req.body)
//     if (error) return res.json(error.message)

//     const newuSTD = new StudentModal(req.body)
//     const salt = await bcrypt.genSalt(10)
//     newuSTD.Password = await bcrypt.hash(newuSTD.Password, salt)
//     await newuSTD.save()

//     res.send({ status: (200), message: 'successfully Add' })
//   } catch (error) {
//     console.log(error.message)
//   }
// })

PUTCustmerRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const updatedData = await CustmerModal.findByIdAndUpdate(id, {
      Custmer_name: req.body.Custmer_name,
      phone: req.body.phone,
      Address: req.body.Address,
      username: req.body.username,
      Password: req.body.Password,
     
    

    }, { new: true })

    res.send({ status: (200), message: 'successfully updated' })
  } catch (error) {
    res.status(400).send(error.message)
  }
})

DELETECustmerRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    await CustmerModal.findByIdAndDelete(id)

    res.send({ status: (200), message: 'successfully deleted' })
  } catch (error) {
    res.status(400).send(error.message)
  }
})

module.exports = { GETCustmerRouter, DELETECustmerRouter, PUTCustmerRouter, POSTCustmerRouter }
