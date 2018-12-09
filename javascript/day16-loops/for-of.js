let city = 'bangalore'

for( let [index, char] of city.split('').entries()) {
    console.log(index, char)
}

let names = ['ramsh', 'rajesh', 'suresh']

for(let [index, name] of names.entries()) {
    console.log(index, name.toUpperCase())
}
