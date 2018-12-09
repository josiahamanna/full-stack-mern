let price = 10
let age = '20'

console.log(typeof price) // 'number'
console.log(typeof age) // 'string'

price = price + 10
console.log(price)
console.log(age + 1) // '201'

//converting from string to number
console.log(Number(age)) // 20
console.log(parseInt(age)) //20

age = parseInt(age) + 1
console.log(typeof age) // 'number'
console.log(age)

let temparature = '26.3' //26.3 + 1.2 = 27.5
console.log(parseInt(temparature) + 1.2) // 27.2
console.log(parseFloat(temparature) + 1.2) // 27.5

// convert number into string 
console.log(String(price)) //'20'

console.log('' + price) // '20'