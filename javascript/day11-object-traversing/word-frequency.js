const sentense = 'virat virat sachin virat sachin dhoni sachin'

let result = {}
const players = sentense.split(' ')

players.forEach(function(player) {
    if(result.hasOwnProperty(player)) {
        result[player] += 1
    } else {
        result[player] = 1
    }
})

for( let key in result ) {
    console.log(`${result[key]} ${'*'.repeat(result[key])}`)
}

for( let key in result ) {
    console.log(`${key} appears ${result[key]} ${result[key] > 1 ? 'times' : 'time'}`)
}