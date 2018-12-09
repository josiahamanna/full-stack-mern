function fbLikes(likes) {
    let result
    if(likes.length == 0) {
        result = `no one likes this`
    } else if(likes.length == 1) {
        result = `${likes[0]} likes this`
    } else if(likes.length == 2) {
        result = `${likes[0]} and ${likes[1]} like this`
    } else if(likes.length == 3) {
        result = `${likes[0]}, ${likes[1]} and ${likes[2]} like this`
    } else {
        result = `${likes[0]} and ${likes[1]} and ${likes.length - 1} others like this`
    }
    return result
}

console.log(fbLikes([])) // 'no one likes this'
console.log(fbLikes(['Peter'])) // 'Peter likes this'
console.log(fbLikes(['Jacob', 'Alex'])) // 'Jacob and Alex like this'
console.log(fbLikes(['Max', 'Jacob', 'Mark', 'Max'])) // 'Max and Jacob and 3 others like this'
console.log(fbLikes(['Ravi', 'Alex', 'Jacob', 'Mark', 'max'])) // 'Ravi and Alex and 4 others like this'