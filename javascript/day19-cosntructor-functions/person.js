function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName

    this.greet = function() {
        return `Hi, ${this.firstName} ${this.lastName}`
    }
}

let p1 = new Person('sachin', 'tendulkar')

console.log(p1.greet())