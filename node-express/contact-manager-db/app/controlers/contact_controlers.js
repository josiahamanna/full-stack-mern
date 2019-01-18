const express = require('express')
const router = express.Router()
const { Contact } = require('../models/contact')

router.get('/', (req,res)=>{
    Contact.find()
        .then((contacts)=>{
            res.send(contacts)
        })
        .catch((err)=>{
            res.send(err)
        })
})

// route - to create a contact
router.post('/', (req,res)=>{
    const body = req.body
    const contact = new Contact(body)
    contact.save()
        .then((contact)=>{
            if(contact) {
                res.send(contact)
            } else {
                res.send({})
            }           
        })
        .catch((err)=>{
            res.send(err)
        })
})

// route - to get a contact by ID
router.get('/:id', (req, res)=>{
    const id = req.params.contactID
    Contact.findById(id)
        .then((contact)=>{
            if(contact) {
                res.send(contact)
            } else {
                res.send({})
            }          
        })
        .catch((err)=>{
            res.send(err)
        })
})

// route - to delete a record by id
router.delete('/:id', (req, res)=>{
    const id = req.params.id
    Contact.findByIdAndDelete(id)
        .then((contact)=>{
            if(contact) {
                res.send(contact)
            } else {
                res.send({})
            }
        })
        .catch((err)=>{
            res.send(err)
        })
})

module.exports = { contactRouter: router }