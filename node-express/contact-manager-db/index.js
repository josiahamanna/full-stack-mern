const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3000
const validator = require('validator')

app.use(express.json())

// DB CONFIGURATION 
// telling mongoose to use ES6's promise library 
mongoose.Promise = global.Promise                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

mongoose.connect('mongodb://localhost:27017/contact-manager-db', { useNewUrlParser: true})
    .then(()=> console.log('connected to DB'))
    .catch((err)=>console.log(err))

/*
to store information about a contact - like the name, email, mobile, website etc

schema -tells what feilds must be present in all documents
schema types - tells what type the fiels belongs to
schema types - string, Number, Array, Boolean, Date, Object
*/

/*
    id
    name - String
    mobile - String
    email - string
    website - string
    createdAt - Date
*/

//const Schema = mongoose.Schema
const { Schema } = mongoose
const contactSchema = new Schema({
    //all the fields, it's types, and its validatins
    contactID: {
        type: Number,
        required: false
    }, 
    name: {
        type: String, 
        required: true, 
        minlength: 3, 
        maxlength: 128
    },
    mobile: {
        type: String,
        required: true,
        //custom validations
        validate: {
            validator: function(value) {
                return validator.isNumeric(value)
            },
            message: function(){
                return 'invalid mobile number format'
            }
        }
    },
    email: {
        type: String,
        validate: {
            validator: function(value){
                if(value.length==0){
                    return true
                }
                return validator.isEmail(value)
            },
            message: function(){
                return 'invalid email format'
            }
        }
    },

    website: {
        type: String,
        validate: {
            validator: function(value){
                if(validator.isEmpty(value)){
                    return true
                }
                return validator.isURL(value)
            },
            message: function(){
                return 'invalid URL format'
            }
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Contact = mongoose.model('contact', contactSchema)

// Contact.schema.add({
    
// })

app.get ('/',(req, res)=>{
    res.send('welcome to the contact manager')
})

app.get('/contacts', (req,res)=>{
    Contact.find()
        .then((contacts)=>{
            res.send(contacts)
        })
        .catch((err)=>{
            res.send(err)
        })
})

// route - to create a contact
app.post('/contacts', (req,res)=>{
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
app.get('/contacts/:id', (req, res)=>{
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
app.delete('/contacts/:id', (req, res)=>{
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

app.listen(port, ()=>{
    console.log('Listening to port 3000')
})