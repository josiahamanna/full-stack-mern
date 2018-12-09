// functions declaration
function sayHello() {
    console.log('im inside a function')
    return 'hello'
}

// function ivocation / calling of the function

console.log(sayHello) // here it is only refering to the function and not invoking it

console.log(sayHello()) // 'hello'

function greet(name) {
     // name parameter, variables that can be used INSIDE the function
     return 'hello ' + name
}

console.log(greet()) // 'hello undefined'

console.log(greet('Shyam')) // shyam = argument / output: 'hello Shyam'
console.log(greet('paavan')) // 'hello paavan'

let result = greet('sachin')
console.log(result) // 'hello sachin'