class Book {
    constructor(title, author, year) {
        this.title = title
        this.author = author
        this.year = year
    }

    displayInfo() {
        return {title: this.title, author: this.author, year: this.year}
    }
}

class Ebook extends Book {
    constructor(title, author, year, price){
        super(title, author, year) 
        this.price = price
    }

    displayInfo() {
       console.log({ ...super.displayInfo(), price: this.price })
    }
}

const HarryPotter = new Ebook('Harry Potter', 'Joanne Rowling', 1997, 400)

HarryPotter.displayInfo()