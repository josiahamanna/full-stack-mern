function genarateHashTag(string){

    let myArray = string.split(' ')
    let newArray = '#'

    for( let i =0; i<myArray.length; i++) {
        newArray += myArray[i][0].toUpperCase() + myArray[i].slice(1).toLowerCase()
    }

    return newArray
}

let string = 'make in india'

console.log(genarateHashTag(string))