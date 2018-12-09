const users = ['arjun', 'ravisha', 'ramesh', 'sonali']

let userToFind = 'roopa'

// 1 - indexOf 
if(users.indexOf(userToFind) >= 0) {
    console.log(userToFind + ' found in the array')
} else {
    console.log(userToFind + ' not found in the array')
}

// 2 - includes 
if(users.includes(userToFind)) {
    console.log(userToFind + ' found in the array')
} else {
    console.log(userToFind + ' not found in the array')
}

// 3 - traditional c programming style
let isFound = false
for( let i = 0; i < users.length; i++) {
    if(users[i] == userToFind) {
        isFount = true
        break
    }
}

if(isFound == true) {
    console.log(userToFind + ' found in the array')
} else {
    console.log(userToFind + ' not found in the array')
}

// 4 - JavaScript style
// if the element is found in the array, the element is returened, 
// if the element is not found in the array, it returns undefined 
let findUser = users.find(function(name) {
    return name == userToFind
})

if(findUser == userToFind) {
    console.log(userToFind + ' found in the array')
} else {
    console.log(userToFind + ' not found in the array')
}