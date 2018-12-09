let n1 = 10, n2 = 20

function add(n1, n2) {
    // result is a variable used inside the function, but not created with the keywords let and var 
    // hence result is now created on the fly and available globally 
    result = n1 + n2
    return result
}

console.log(add(n1,n2))

console.log(result) // not going to throw error