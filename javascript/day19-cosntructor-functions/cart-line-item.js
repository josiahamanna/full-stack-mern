function CartLineItem(name, price, quantity) {
    this.name = name
    this.price = price
    this.quantity = quantity

    this.total = function() {
        return this.price * this.quantity
    }
}

let lineItem1 = new CartLineItem('marker', 15, 2)
console.log(lineItem1.total()) // 30

let lineItem2 = new CartLineItem('stand', 150, 3)
console.log(lineItem2.total()) // 450