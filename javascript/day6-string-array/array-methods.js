let fruits = ['apple', 'watermelon']

console.log(fruits.length) // 2

// adds an element to the end of the array
fruits.push('chikoo')
console.log(fruits) // [ 'apple', 'watermelon', 'chikoo' ]
console.log(fruits.length) // 3

// add element at the beginning of array
fruits.unshift('strawberry')
console.log(fruits) // [ 'strawberry', 'apple', 'watermelon', 'chikoo' ]

// add element at specific index
fruits.splice(2,0,'banana')
console.log(fruits) // [ 'strawberry', 'apple', 'banana', 'watermelon', 'chikoo' ]

let players = ['sachin', 'virat', 'dhoni', 'shewag', 'saheer']
console.log(players)
// remove element from end of array
players.pop()
console.log(players) // [ 'sachin', 'virat', 'dhoni', 'shewag' ]

// remove element from the beginning of array
players.shift()
console.log(players) // [ 'virat', 'dhoni', 'shewag' ]

// remeove element at specific index
let cities = ['bangalore', 'delhi', 'chennai', 'hydrabad', 'mumbai']
cities.splice(2,1)
console.log(cities) // [ 'bangalore', 'delhi', 'hydrabad', 'mumbai' ]

let tags = 'trave, stay, explore'
let keyWords = tags.split(', ')
console.log(keyWords) // [ 'trave', 'stay', 'explore' ]

console.log(players)
console.log(players.join(', ')) // 'virat, sheag'

console.log(cities.join(' - '))

let actors = ['decaprio', 'mark walburg', 'matt demon']
console.log(actors.join(', '))

let numbers = [1,2,3,4,5,6,7,8,9,0]
console.log(numbers.slice(0,3)) // [ 1, 2, 3 ]
console.log(numbers.slice(3,6)) // [ 4, 5, 6 ]
console.log(numbers.slice(6)) // [ 7, 8, 9, 0 ]

console.log(`(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6).join('')}`) // (123) 456-7890

console.log(cities) // [ 'bangalore', 'delhi', 'hydrabad', 'mumbai' ]

// find whether an element is present in an array and finding at what index it is present 
// indexOf has two uses
// 1) to know what the index of an element 
// 2) to see if the element is present or not
console.log(cities.indexOf('mumbai')) // 3
console.log(cities.indexOf('kochi')) // -1

console.log(`mumbai is found in the ${cities.indexOf('mumbai')} index`) // mumbai is found in the 3 index

if(cities.indexOf('mumbai') >= 0) {
    console.log('element is found')
} else {
    console.log('element is not found')
}

console.log(cities.includes('bangalore')) // true
console.log(cities.includes('kochi')) // false

