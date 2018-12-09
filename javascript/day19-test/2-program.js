function count (string, key) {
    let myArray = string.split(' ')
    let count = 0
    myArray.forEach(function(word) {
        if(word == key) {
            count++
        }
    })
    return count
}

console.log(count('this is this is this is the this', 'this'))