const cartItems = [
    {productName: 'marker', price: 15, quantity: 1},
    {productName: 'scale', price: 10, quantity: 2}
]

// first activity 
console.log('Frist activity\n')
cartItems.forEach(function(cartItem) {
    console.log(`Name: ${cartItem.productName}, Price: ${cartItem.price}, Quantity: ${cartItem.quantity}`)
})

// second activity
console.log('\nSecond activity\n')
cartItems.forEach(function(cartItem) {
    console.log(`Name: ${cartItem.productName}, Price: ${cartItem.price}, Quantity: ${cartItem.quantity}, Subtotal: ${cartItem.price*cartItem.quantity}`)
})

// Third activity
console.log('\nThird activity\n')
let totalItem = 0
let totalPrice = 0
let subtotal = 0
cartItems.forEach(function(cartItem) {
    subtotal = cartItem.price*cartItem.quantity
    console.log(`Name: ${cartItem.productName}, Price: ${cartItem.price}, Qantity: ${cartItem.quantity}, Subtotal: ${subtotal}`)
    totalItem += cartItem.quantity
    totalPrice += subtotal
})
console.log(`Total Items - ${totalItem}\nTotal Price - ${totalPrice}`)