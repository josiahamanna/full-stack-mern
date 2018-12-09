function Vehicle(name, fuel, manufacturer, type) {
    this.name = name
    this.fuel = fuel
    this.manufacturer = manufacturer
    this.type = type

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

let c1 = new Vehicle('swift', 'pertro', 'maruthi', 'hatch')
console.log(c1.name, c1.start())

let c2 = new Vehicle('civic', 'petrol', 'honda', 'sedan')
console.log(c2.name, c2.fuel, c2.start())

let c3 = new Vehicle()
c3.name = 'fortuner'
c3.fuel = 'disel'
c3.manufacturer = 'toyota'
c3.type = 'suv'
console.log(c3.name, c3.start())

let cars = []
cars.push(c1,c2,c3)

cars.forEach(function(car) {
    console.log(car.name)
})