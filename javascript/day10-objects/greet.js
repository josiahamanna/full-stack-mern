const person = {
    name: 'Arjun',
    // whenever a property inside an object, is holding function as its value, its termed as method
    greet: function(){
        return 'from inside the function'
    }
}

console.log(person.name) // 'Arjun'
console.log(person.gree) // [function: greet]
// greet is a property / a method
console.log(person.greet())