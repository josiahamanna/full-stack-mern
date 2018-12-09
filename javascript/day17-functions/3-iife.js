// iife - immediately invoke function expression

// function sayHello(name) {
//     return 'hello' + name
// }

// console.log(sayHello('urvi'))

// let result = (function (name) {
//     return 'hello ' + name
// }('sunil'))

// console.log(result) // 'hello sunil' 

// use can use it without the result too
(function (item){
    console.log('this is ' + item)
}('book'))