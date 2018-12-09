// 'aeiou'

const word = 'banalore'
const vowels = 'aeiou'
let count = 0
let vcount = 0

//es6 = for of
for(let c of word){
    if(c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
        count = count + 1
    }
}

for( let i = 0; i < word.length; i++){
    if(word[i] == 'a' || word[i] == 'e' || word[i] == 'i' || word[i] == 'o' || word[i] == 'u') {
        vcount = vcount + 1
    }
}

console.log('vowel count', count)
console.log('vowel count', vcount)