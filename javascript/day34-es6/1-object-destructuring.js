const person = {
    firstName: 'sachin',
    lastName: 'tendulkar'
}

const { firstName: fName, lastName: lName } = person 
console.log(fName, lName)

// if you try to destructure a property that doesn't exist, it return undefined 
// const { coutry } = person
// console.log(country)

// while destructuring, you can assign a default value 

const { country = 'india' } = person 
console.log(country)

// you can destructure, give an alias and also assign a default value 
// const { country: c = 'india' } = person