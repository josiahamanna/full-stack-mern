const axios = require('axios')

let url = 'http://www.mapquestapi.com/geocoding/v1/address?key=XKiqOdqZ1ea4l4plVrqc1HIoM0hajCAC&location=1600+Pennsylvania+Ave+NW,Washington,DC,20500'

axios.get(url).then(function(response){
    let address = response.data.results[0].locations[0].latLng
    console.log(`Longitude: ${address.lng}\nLatitude: ${address.lat}`)
    //console.log(response)
})