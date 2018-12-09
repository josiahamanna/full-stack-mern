const axios = require('axios')

let url = 'https://api.darksky.net/forecast/cd3fe130dd459d3c36e0b47549ab467a/38.897683,-77.036629'

axios.get(url).then(function(response){
    let temp = response.data.currently.temperature
    console.log('temperature ' + ((temp-35)*(5/9)))
}).catch(function(err){
    console.log(err.message)
})