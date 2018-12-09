let userName = 'arjun nagarajan reddy'

let initials = ''

let myArray = userName.split(' ',2)

for (let i = 0; i < myArray.length; i++) {
    initials += myArray[i][0].toUpperCase()
}

console.log(initials)