// es 6 arrow function 

const sum = (n1, n2) => {
    return n1 + n2
}

console.log(sum(10,20))

const numbers = [10,15,20,25]

// filter and get only odds
// const odds = numbers.filter(function(n){
//     return n % 2 != 0
// })
// console.log(odds)

// 1 way
// const odds = numbers.filter((n) => {
//     return n%2!=0
// })
// console.log(odds)

// if there is only 1 argument passed to the function, you can remove the () brackets
const odds = numbers.filter(n=>{
    return n%2!=0
})
console.log(odds)

// if there is 2 or more arguments, we have to use the () brackets 
numbers.forEach((n,i)=>{
    console.log(i,n)
})

// if there is only 1 statements to be executed inside the function, then you can remove the {} and also remove the return keyword

const evens = numbers.filter(n=>n%2==0)
console.log(evens)

// if we are returning only an object from a function, we need to wrap the object in ()

const personFunction = (name, city) = ({name, city})
console.log(personFunction('arjun', 'banglore'))