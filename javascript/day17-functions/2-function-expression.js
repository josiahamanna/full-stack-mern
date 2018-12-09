// function expression
const greet = function(studentName) { // anonymous function = a function that does not have any name
    return 'hello' + studentName    
}

console.log(greet('manasa'))
console.log(typeof greet) // 'function'