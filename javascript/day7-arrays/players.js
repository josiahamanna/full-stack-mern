const players = ['sachin', 'virat', 'dhoni', 'rahul']

console.log(players.length) // 4
console.log(players[4]) // undefined
console.log(players[players.length - 1]) // 'rahul'

// for 
// initialization, condition, incrementation 
for(let i=0; i < players.length; i++) {
    console.log(i, players[i].toUpperCase()) // access the array elements via indexes 
}

// forEach - array
// each element in the array is passed as an argument to the function 
players.forEach(function (name) {
    console.log(name)
})

const fruits = ['apple', 'watermelon', 'strawberry']

fruits.forEach(function(name, index){
    console.log(index, name) // displays all the elements with index
}) 

// es6 - for each

for (let name of fruits) {
    console.log(name) // displays all the fruits
}