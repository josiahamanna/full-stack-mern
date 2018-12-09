const word = 'abraca dabra'
let count = 0

for (let i = 0; i < word.length; i++){
    if(word[i] == 'a') {
        count = count + 1
    }
}

console.log('a appears ' + count + ' times')