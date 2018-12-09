let city = 'banglore'

console.log(city)
console.log(city[0]) // 'b'
console.log(city[1])

let productName = 'marker'
let productDescription = 'white board marker'
let reviews = 'wonderful marker'

let userName = 'aniruddha'
let email = 'ani@dctacademy.com'
let password = 'secret123'
let randomSet = 'JaYaNaGaR'

console.log(password.length) // 9
console.log(typeof(city)) // 'string'
console.log(userName.toUpperCase()) // 'ANIRUDDHA'
console.log(randomSet.toLowerCase()) // 'jayanagar'

let sentence = 'now is the time for all good people'
console.log(sentence.indexOf('time')) // 11
console.log(sentence.indexOf('bangalore')) // -1

console.log(city.indexOf('a')) // 1
console.log(city.lastIndexOf('a')) // 4

console.log(city.indexOf('g')) // 3
console.log(city.lastIndexOf('g')) //3

console.log(city.charAt(0)) // 'b'

console.log(city.includes('g')) // true
console.log(city.includes('h')) //false

let countStars = 4
console.log('*'.repeat(3)) // '***'
console.log('*'.repeat(countStars)) // '****'

let magicWord = 'abraca dabra'
console.log(magicWord.repeat(3)) // 'abraca dabraabraca dabraabraca dabra'

//console.log(userName.toCapitalize()) // 'Aniruddha'