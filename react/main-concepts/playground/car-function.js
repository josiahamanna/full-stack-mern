// methods - start, stop

function Car(data) {
    this._id = Math.round(Math.random())
    this.name = data.name
    this.make = data.make

    //instance methods
    this.start = function(){
        return `${this.name} has started`
    }
    this.stop = function(){
        return `${this.name} has stopped`
    }
}

// properties on type
Car.wheels = 4

// methods at type level , class methods
Car.family = function(){
    return 'Car belongs to vehicle family'
}

let c1 = new Car({name:'swift',make:'maruthi'})
console.log(c1.start())