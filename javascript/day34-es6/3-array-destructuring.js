//es5 
// var product = ['marker', 'stationary', 19.2, 125]
// var name = product[0]
// var category = product[1]
// var price = product[2]
// var stock = product[4]

// console.log(name, category, price, stock, rating)

// es5
const product = ['marker', 'stationary', 19.2, 125]
const [name, cat, price] = product
console.log(name, cat, price)

// get the name and price, but skip the category
const [name1,,price1] = product
console.log(name1, price1)

//skip the name, category and get only the the price 
const [,,price2] = product
console.log(price2)