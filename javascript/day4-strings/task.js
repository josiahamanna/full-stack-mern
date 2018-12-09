let word = 'this is a task'
let count = 0;
let vowel = 'aeiou'

for (let i = 0; i < word.length; i++) {
    if(vowel.includes(word[i])){
        count = count + 1
    }
}

console.log(count)