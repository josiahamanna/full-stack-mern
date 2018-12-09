const axios = require('axios')



let name = process.argv[2]

url = `https://gender-api.com/get?name=${name}&key=pRPLCejozFwCHFbVCR`

//console.log(url)

axios.get(url).then(function(response){
    console.log(`Hi, ${response.data.name_sanitized}. You are a '${response.data.gender}'`)
})

