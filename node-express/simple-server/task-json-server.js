const http = require('http')
const port = 3001

const users = [
    {id:1, name: 'Ramesh'},
    {id:2, name: 'Suresh'}
]

const products = [
    {id:1, name: 'marker'},
    {id:2, name: 'scale'}
]

const server = http.createServer(function(request, response){
    if(request.url =='/'){
        response.end('welcome to json server')
    } else if(request.url =='/users') {
        response.setHeader('Content-Type', 'application/json')
        response.end(JSON.stringify(users))
    } else if(request.url == '/products') {
        response.setHeader('Content-Type', 'application/json')
        response.end(JSON.stringify(products))
    }
})

server.listen(port, function(){
    
})