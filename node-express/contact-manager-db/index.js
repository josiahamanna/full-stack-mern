const express = require('express')
const app = express()
const port = 3004
const { contactRouter } = require('./app/controlers/contact_controlers')
require('./config/database')

app.use(express.json())

app.get ('/',(req, res)=>{
    res.send('welcome to the contact manager')
})

app.use('/contacts', contactRouter)

app.listen(port, ()=>{
    console.log('Listening to port', port)
})