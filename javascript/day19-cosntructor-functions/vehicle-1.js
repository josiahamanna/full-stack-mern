function Vehicle(data) {
    this.name = data.name
    this.fuel = data.fuel
    this.manufacturer = data.manufacturer
    this.type = data.type

    this.start = function() {
        return 'the car has started'
    }

    this.stop = function() {
        return 'the car has stopped'
    }

    this.move = function() {
        return 'the car is moving'
    }
}

let c = new Vehicle({type: 'hatch', name: 'swift', manufacturer: 'maruthi', fuel: 'petrol'})

console.log(c)
