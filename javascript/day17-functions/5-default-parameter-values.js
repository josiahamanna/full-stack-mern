// set default values to your parameters
// es5

function add(n1, n2) {
    // ternary operator 
    // (condition) ? trueValue : falseValue
    n1 = (n1) ? n1 : 0
    n2 = (n2) ? n2 : 0
    return n1 + n2

    // you can do this too
    // n1 = n1 || 0
    // n2 = n2 || 0
    // return n1 + n2
}

console.log(add())
console.log(add(10))
console.log(add(undefined,20))
console.log('     ')

console.log(add(10,20,30))

// 6s6
function addes6(n1 = 0, n2 =0) {
    return n1 + n2
}

function addes6(n1 = 6, n2 = 0) {
    return n1 + n2
}

console.log(addes6())
console.log(addes6(10))
console.log(addes6(undefined, 20))
console.log(addes6(10,20))