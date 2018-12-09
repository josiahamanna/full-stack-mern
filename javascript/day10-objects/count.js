let counter = {
    value: 0,
    // inside a function defned inside an object, the value of this refers to the current object 
    up : function(){
        return ++this.value
    },
    down: function(){
        return --this.value
    },
    reset: function() {
        return this.value = 0
    },
    // you can also send a parameter/argument
    moveUpBy: function(n) {
        return this.value += n
    }
}

console.log(counter.value)
console.log(counter.up())
console.log(counter.up())
console.log(counter.down())
console.log(counter.down())
console.log(counter.reset())
console.log(counter.moveUpBy(10))