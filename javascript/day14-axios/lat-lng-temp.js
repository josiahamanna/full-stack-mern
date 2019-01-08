const axios = require('axios')

let url = `https://api.darksky.net/forecast/${process.env.DARK_SKY_KEY}/38.897683,-77.036629`

console.log(url)

axios.get(url).then(function(response){
    let temp = response.data.currently.temperature
    console.log('temperature ' + ((temp-35)*(5/9)))
}).catch(function(err){
    console.log(err.message)
})