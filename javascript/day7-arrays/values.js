const values = ['bangalore', 25.3, ['jayanagar', 'btm'], {isCapital: true}, true, function(){ return 'hello from array'}]

console.log(values)
// [ 'bangalore',
//   25.3,
//   [ 'jayanaga', 'btm' ],
//   { isCapital: true },
//   true,
//   [Function] ]

console.log(values[0]) // 'bangalore'
console.log(values[2]) // [ 'jayanagar', 'btm' ]
console.log(values[2][0]) // 'jayanagar'
console.log(values[3].isCapital) // true
console.log(values[5]) // [function]
console.log(values[5]()) // 'hello from array'