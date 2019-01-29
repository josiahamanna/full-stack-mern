const express = require('express')
const app = express()
const port = 3004
const { contactRouter } = require('./app/controlers/contact_controlers')
const { usersRouter } = require('./app/controlers/user_controller')
require('./config/database')

app.use(express.json())

app.get ('/',(req, res)=>{
    res.send('welcome to the contact manager')
})

app.use('/contacts', contactRouter)
app.use('/users', usersRouter)

app.listen(port, ()=>{
    console.log('Listening to port', port)
})