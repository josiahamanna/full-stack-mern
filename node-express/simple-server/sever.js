const http = require('http')
const port = 3001

const users = [
    {id:1, name:'arjun'},
    {id:2, name:'karan'}
]

const server = http.createServer(function(request, response){
    if(request.url == '/'){
        response.end('welcome to our website')
    } else if(request.url=='/contact'){
        response.end('jayanagar 4th block, banglore')
    } else if(request.url=='/about'){
        response.end('about us page')
    } else if(request.url=='/services'){
        response.setHeader('Content-Type', 'text/html')
        response.end(`
            <h2> services we offer </h2>
            <ul>
                <li> Project management </li>
                <li> Interior Designing</li>
            </ul>
        `)
    } else if(request.url=='/users'){
        response.setHeader('Content-Type', 'application/json')
        response.end(JSON.stringify(users))
    }
})

server.listen(port, function(){
    console.log('server running... listening on port', port)
})