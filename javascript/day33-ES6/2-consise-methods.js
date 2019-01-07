// enhanced object literals 

// 1. object concise methods 

// es5

// var person = {
//     firstName: 'rahul', 
//     lastName: 'dravid', 
//     details: function(){
//         return this.firstName + ' ' + this.lastName
//     }, 
//     greet: function(name) { }
// }

// console.log(person.details)

// es6 
const person = {
    firstName: 'rahul', 
    lastName: 'dravid', 
    details() {
        return `${this.firstName} ${this.lastName}`
    },
    greet(name) {
        return `hello, ${name}. My name is ${this.firstName}`
    }
}

console.log(person.greet('ani'))