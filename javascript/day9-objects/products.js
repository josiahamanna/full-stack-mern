// object is an unodered, string indexed, collection of values

const productArr = ['marker', 15, 'white board marker', false, 'camlin']
console.log(productArr[1]) // 15
console.log(productArr[4]) // 'camlin'
console.log(`The cost of the ${productArr[0]} is ${productArr[1]}. It is a ${productArr[2]}`) // 'The cost of the marker is 15. It is a white board marker'

const product = {
    'name': 'marker',
    'price': 15,
    'description': 'white board marker',
    codEligible: false,
    brand: 'camlin',
    sellers: ['sri venkateshara stationary', 'SS paper mart'],
    reviews: [
        { userName: 'arjun', rating: 4, body: 'long lasting'},
        { userName: 'gaja', rating: 3, body: 'its very nice'}
    ]
}

console.log(product.name) // 'marker'
console.log(product.price) // 15
console.log(product.description) // 'white board marker'

console.log(`The cost of the ${product.name} is ${product.price}. It is a ${product.description}`) // 'The cost of the marker is 15. It is a white board marker'

console.log(`listing Reviews - ${product.reviews.length}`)
product.reviews.forEach(function(review) {
    console.log(`${review.userName} has given ${review.rating}`)
})

// 'listing Reviews - 2'
// 'arjun has given 4'
// 'gaja has given 3'