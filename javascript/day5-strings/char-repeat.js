function findRepeat(string) {

    if(string.length < 1){
        return 'empty string'
    }

    let duplicate = {}
    let count = 0;
    let returnString = ''

    for(let i = 0; i < string.length; i++) {
        // if(!duplicate[string[i]]) {
        //     duplicate[string[i]] = 0;
        // }
        // duplicate[string[i]] += 1;
        if(duplicate[string[i]]) {
            duplicate[string[i]] += 1
        } else {
            duplicate[string[i]] = 0
        }
    }

    for(let i in duplicate) {
        if (duplicate[i] > 1) {
            returnString += i;
        }
    }

    return returnString
    
}

let string = 'aabbccdd'

console.log(findRepeat(string))