const axios = require('axios')
const url = 'http://jsonplaceholder.typicode.com/users/'

axios.get(url).then(function(response){
    const users = response.data
    console.log(`Listing users - ${users.length}`)
    users.forEach(function(user){
        console.log(`${user.id}. ${user.name} - ${user.email}`)
    })
}).catch(function(err) {
    console.log(err.message)
})