// var - function scope not block scoped 
console.log(msg) // undefined / because variable msg is hoisted

if( 20 > 10 ) {
    var msg = '20 is greater than 10'
}

console.log(msg) // 20 is greater than 10

add() 
// function declaration is also hoisted ie moved to the top of execution by javascript runtime
function add() {
    console.log('I am adding')
}

console.log(multiply) // undefined 
// multiply() // multiply is not a function 

// function express is not hoisted 
var multiply = function(){
    console.log('I am multiplying')
}

multiply()