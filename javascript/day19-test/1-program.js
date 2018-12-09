function findMissing(array) {
    let minIndex = Math.min(...array)
    let maxIndex = Math.max(...array)
    let expectedValue = 0, sum = 0
    
    for(let i = minIndex; i <= maxIndex; i++) {
        expectedValue += i
    }

    for(let i = 0; i < array.length; i++){
        sum += array[i]
    }

    return Math.abs(sum - expectedValue)
}

console.log(findMissing([12,13,15,16]))