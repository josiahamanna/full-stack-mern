let fruits = ['apple', 'water melon', 'chickoo']

fruits.forEach(function(fruit, index) {
    console.log(index, fruit)
})
// the third field is the array which is being iterated
let tags = 'js rb py'
tags.split(' ').forEach(function(tag, index, array) {
    console.log(tag, index, array)
})

let city = 'bangalore'
city.split('').forEach(function(char){
    console.log(char)
})