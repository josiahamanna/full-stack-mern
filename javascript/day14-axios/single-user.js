// url - http://jsonplaceholder.typicode.com/users/1

const axios = require('axios')
//const url = 'http://jsonplaceholder.typicode.com/users/1'

// axios.get(url) return a PROMISE  (vv imp) (objects)
// console.log(axios.get(url))


let ids = process.argv.splice(2)

//console.log(ids)

ids.forEach(function(id) {

    let url = `http://jsonplaceholder.typicode.com/users/${parseInt(id)}`
    
    axios.get(url).then(function(response) {
    
        const user = response.data

        // becuse there is only one user, we are getting 'data' as object.
        // if there is more than one, the 'data' is going to be array of objects

        // console.log(typeof user)
        console.log(`${user.id}. ${user.name} ${user.email}`)
    }).catch(function(err){
    console.log(err.message)
    })
})