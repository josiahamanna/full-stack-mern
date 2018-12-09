
const user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}

console.log('name:', user.name) // 'name: Leanne Graham'
console.log('email:', user.email) // 'email: Sincere@april.biz'
console.log('address - street', user.address.street) // 'address - street Kulas Light'
console.log('address - city', user.address.city) // 'address - city Gwenborough'
console.log('address - city', user['address']['city']) // 'address - city Gwenborough'
console.log('address - geo - lat', user.address.geo.lat) // 'address - geo - lat -37.3159'
console.log('address - geo - lng', user.address.geo.lng) //  'address - geo - lng 81.1496'
console.log('company - name:', user.company.name) // 'company - name: Romaguera-Crona'

console.log(Object.keys(user))
/* 
[ 'id',
  'name',
  'username',
  'email',
  'address',
  'phone',
  'website',
  'company' ]
  */

console.log(Object.values(user)) 
/*
const user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}
*/

// Task
console.log(`${user.name} - ${user.email} - (${user.address.street}, ${user.address.city}, ${user.address.zipcode}) - (${user.address.geo.lat}, ${user.address.geo.lng}) - ${user.phone} - (${user.company.name} - ${user.company.catchPhrase})`)

/* 
Leanne Graham - Sincere@april.biz - (Kulas Light, Gwenborough, 92998-3874) - (-37.3159, 81.1496) - 1-770-736-8031 x56442 - (Romaguera-Crona - Multi-layered client-server neural-net)
*/
