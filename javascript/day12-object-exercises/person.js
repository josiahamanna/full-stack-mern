/* excercise 
1 => properties - firstName, lastName
2 => method person.greet()
*/

const person = {

    // properties
    firstName: 'First',
    secondName: 'Second',

    // methods
    greet: function() {
        return `Hello, ${this.firstName} ${this.secondName}`
    }
}

console.log(person.greet())