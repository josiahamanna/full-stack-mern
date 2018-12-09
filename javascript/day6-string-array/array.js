let numbers = new Array()
console.log(numbers) // []

// short hand
let fruits = []
console.log(fruits) // []

// we can still store without an array, but we have to introduce a lot of variables 

let player1 = 'sachin'
let player2 = 'virat'
let player3 = 'dhoni'
let player4 = 'rahul'
console.log(player1)
console.log(player3)

// array is an ordered, integer indexed, collection of values 
let players = ['sachin', 'virat', 'dhoni', 'rahul', 'raina']
console.log(players) // [ 'sachin', 'virat', 'dhoni', 'rahul', 'raina' ]
console.log(players[0]) // 'sachin'
console.log(players[2]) //
console.log(players[6]) // undefined

// adding a new element at the end of the array 
players[5] = 'zaheer'
console.log(players)  // [ 'sachin', 'virat', 'dhoni', 'rahul', 'raina', 'zaheer' ]

// updating the value of an array element
players[0] = 'SACHIN'
console.log(players)

console.log(typeof players) // 'object'
console.log(Array.isArray(players)) // true

let student = {
    firstName: 'naga',
    secondName: 'sai'
}

console.log(typeof student) // 'object'
console.log(Array.isArray(student)) // false