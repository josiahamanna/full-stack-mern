let person = {
    firstName: 'sachin'
}

console.log(person)
console.log(typeof person) // 'object'

console.log(person.lastName) // undefined

// add new property in to an object
person.lastName = 'tendulkar'
console.log(person) // { firstName: 'sachin', lastName: 'tendulkar' }

// update a value of a property
person.firstName = 'SACHIN'
console.log(person) // { firstName: 'SACHIN', lastName: 'tendulkar' }

// removea property from an object 
delete person.lastName
console.log(person)

let student  = new Object()

let product = {
    name: 'marker',
    price: 15,
    desciption: 'white board marker'
}

// if you want know all the properties of on object
console.log(Object.keys(product)) // [ 'name', 'price', 'desciption' ]

// if you want to know all the values of on object 
console.log(Object.values(product)) // [ 'marker', 15, 'white board marker' ]

// to know if a value is present in obj
console.log(Object.values(product).includes('marker')) // true
console.log(Object.values(product).includes('camlin')) // false

// to know if a property is present in the obj
console.log(Object.keys(product).includes('reviews')) // false
console.log(product.hasOwnProperty('name')) // true

console.log(product.name == undefined) // false
console.log(product.sellerInfo == undefined) // true

// whenever we are trying to access a property of an object via a variable, we should always use [] notation and not . operator 

let someKey = 'name'
console.log(product.someKey) // undefined
console.log(product[someKey]) // 'marker'  * product['name']

// for in
for (let key in product) {
    console.log(`${key} - ${product[key]}`)
}
// output will be:
// marker
// name - marker
// price - 15
// desciption - white board marker