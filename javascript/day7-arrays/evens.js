const numbers = [10, 15, 20, 25, 30]

// c style
let evenNumbers = []

for(let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        evenNumbers.push(numbers[i])
    }
}
console.log(evenNumbers)

// javascript style way - filter

let result = numbers.filter(function(value){
    return value % 2 == 0
})

console.log(result)