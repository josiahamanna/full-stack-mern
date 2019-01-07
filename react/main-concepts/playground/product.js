// properties - name, price

// book - name, price, author, genre
// Mobile - name, price, model, make

class Product {
    constructor(data) {
        this.name = data.name
        this.price = data.price
    }

    details() {
        return `
        name: ${this.name}
        price: ${this.price}`
    }

    method1() {
        return 'this is a method defined inside product class'
    }
}

class Book extends Product {
    constructor(data) {
        super(data)
        this.author = data.author
        this.genre = data.genre
    }

    details(){
        return `    ${super.details()}
        author:${this.genre}
        genre:${this.genre}`
    }
}

const b1 = new Book ({name:'The day of the jackel', price:345, author:'Fredrick', genre:'thriller'})
console.log(b1.genre)
console.log(b1.name)
console.log(b1.details())