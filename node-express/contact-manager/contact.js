const express = require('express')
const app = express()
const port = 3001
const fs = require('fs')

app.use(express.json())

let contacts 
fs.readFile('./contact.json', (err, data) => {
    contacts = JSON.parse(data.toString())
})

app.get('/contacts', function(req, res){
    res.send(contacts)
})

app.get('/contacts/:id', function(req, res){
    let contact = contacts.find(contact=>{
        return contact.id == req.params.id
    })
    res.send(contact)
})

app.post('/contacts', function(req, res){
    const data = req.body
    // console.log(data)
    data.createAt = new Date()
    contacts.push(data)
    fs.writeFile('./contact.json', JSON.stringify(contacts), err=>{
        if(err){
            return err
        }
        res.send({
            contacts: data, 
            notice: 'successfully updated'
        })
    })
})

app.put('/contacts/:id', function(req, res){
    let id = req.params.id
    let body = req.body
    let contact = contacts.find(contact=>{
        return contact.id == id
    })
    
    if(contact){
        contact = body
        fs.writeFile('./contact.json', JSON.stringify(contacts), err=>{
            if(err){
                return err
            }
            res.send({
                contact: contact,
                notice: 'contact updated succesfully'
            })
        })        
    } else {
        res.send('contact not found')
    }
})

app.delete('/contacts/:id', function(req, res){
    let id = req.params.id
    contacts = contacts.filter(contact=>{
        return contact.id != id
    })
    fs.writeFile('./contact.json', JSON.stringify(contacts), err=>{
        if(err){
            return err
        } 
        res.send(contacts)
    })
})



app.listen(port, ()=> console.log('Server is on. Listening on port, ', port))