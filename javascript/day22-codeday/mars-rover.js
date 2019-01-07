function marsRover(a,b,c,d) {
    this.xAxis = a
    this.yAxis = b
    this.direction = c
    this.instructions = d

    this.leftRotation = ['N', 'W', 'S', 'E']
    this.rightRotation = ['N', 'E', 'S', 'W']

    this.rotateLeft = function() {
        return this.leftRotation[(this.leftRotation.indexOf(this.direction)+1)%4]
    }

    this.rotateRight = function() {
        return this.rightRotation[(this.rightRotation.indexOf(this.direction)+1)%4]
    }

    this.finalPosition = function(){
        this.instructions.split('').forEach(function(instruction){
            if(instruction == 'L'){
                this.direction = this.rotateLeft()
                console.log(this.direction)
            } else if (instruction == 'R') {
                this.direction = this.rotateRight()
                console.log(this.direction)
            } else {
                if(this.direction == 'N'){
                    this.yAxis++
                } else if(this.direction == 'S'){
                    this.yAxis--
                } else if(this.direction == 'E'){
                    this.xAxis++
                } else {
                    this.xAxis--
                }
            }
        }.bind(this))
f
        return `${this.xAxis} ${this.yAxis} ${this.direction}`
    }
}

let roverOne = new marsRover(1,2,'N','LMLMLMLMM')
console.log(roverOne.finalPosition())

let reverTwo = new marsRover(3,3,'E', 'MMRMMRMRRM')
console.log(reverTwo.finalPosition())
