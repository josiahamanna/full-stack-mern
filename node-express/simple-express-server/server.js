const express = require('express')
const app = express()
const port = 3001

// 
app.use(express.json())

// app.METHOD('/path', handlerFunction)

const students = [
    { id: 1, name:'sachin', hometown: 'hatti'},
    { id: 2, name:'shyam', hometown: 'vijaywada'}
]

const products = [
    {id: 1, name: 'marker'},
    {id: 2, name: 'scale'}
]

let players = [
    {id:1, name: 'sachin'}
]

app.get('/players', function(req, res){
    console.log(req.method, req.url)
    res.send(players)
})

app.get('/players/:id', function(req, res){
    let players = players.find(function(player){
        return player.id == req.params.id
    })
    if(player) {
        res.send(player)
    } else {
        res.send({})
    }
})

app.post('/players', function(req, res){
    console.log(req.method, req.url)
    console.log('incoming data', req.body)
    const data = req.body
    players.push(data)
    res.send({
        players: data,
        notice: 'successfully created a player'
    })
})

app.get('/', (request, response)=>{
    response.send('welcome to our page')
})

app.get('/about', (request, response)=>{
    response.send('<h2> about us page<h2>')
})

app.get('/users', (request, response)=>{
    response.send([
        {id:1, name:'kishan'},
        {id:2, name: 'john'}
    ])
})

app.get('/students', (request, response) => {
    response.send(students)
})

// named parameters
app.get('/students/:id', function(request, response){
    //console.log('incoming method')
    //console.log('request url', request.url)
    //console.log('request ip address', request.ip)
    //console.log('request.params)
    //response.send(`you selected student with id ${request.params.id}`)

    let student = students.find(function(stud){
        return stud.id == request.params.id || stud.name == request.params.id
    })

    if(student) {
        response.send(student)
    } else {
        // response.send(`there is no record of id ${request.params.id}`)
        response.send({})
    }
})

app.get('/products', (request, response)=>{
    response.send(products)
})

app.get('/products/:name', function(request, response){
    let product = products.find(function(item){
        return item.name == request.params.name
    })
    if(product) {
        response.send(product)
    } else {
        response.send({})
    }
})

app.put('/players/:id', function(req, res){
    let id = req.params.id
    let body = req.body
    let player = players.find(function(player){
        return player.id == id
    })

    if(player) {
        player.name = body.name
        res.send({
            player,
            notice:'successfully updated the player'
        })
    } else {
        res.send({})
    }
})

app.delete('/players/:id', function(req, res){
    let id = req.params.id
    players = players.filter(function(player){
        return player.id != id
    })
    res.send(players)
})


app.get('/batch/:batchID/assignments/:assignID', (request, response)=>{
    response.send(`${request.params.batchID}, ${request.params.assignID}`)
})

app.listen(port, ()=>{console.log('server is listening ojn ', port)})