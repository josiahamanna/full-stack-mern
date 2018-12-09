let numbs = {
    values: [10,15,20,25],
    getEven: function(){ return this.values.filter(function(value) {
        return value % 2 == 0
    })},
    getOdd: function(){return this.values.filter(function(value) {
        return value % 2 == 1
    })}
}

console.log(numbs.getEven())
console.log(numbs.getOdd())