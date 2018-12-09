/* 
colour plays an important role in our lifes. Most of us like this colour better then another. user experience specialists believe that certain cours have certain psychological meaning for us

you are given a 2D array, composed of a colour and it's 'common' association in each array element. The function will create needs to return the color as key and association as its 'value'

For example: 
array[['white', 'goodness']] #returns {'white' => 'goodness'}*/

function colorAssociation(array) {
    let colorObject = {}
    array.forEach(function(set) {
        colorObject[set[0]] = set[1]
    })
    return colorObject
}

console.log(colorAssociation([['white', 'goodness'], 
['blue', 'tranquility'], 
['purple', 'wisdom'], 
['yellow', 'joy'], 
['green', 'harmony']]))