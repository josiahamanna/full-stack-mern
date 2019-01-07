class  Car {
    constructor(data) {
        this.name = data.name
        this.make = data.make
    }

    // instance methods || object method
    start(){
        return `${this.name} has started`
    }
    stop(){
        return `${this.name} has stopped`
    }

    // class methods || static methods 
    static family() {
        return `Car belongs to vehicle family`
    }
}

// properties on type 
Car.wheels = 4

let c1 = new Car({name:'swift', make:'maruthi'})
console.log(c1.start())