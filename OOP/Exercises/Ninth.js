class Product {
    constructor(productId, name, price) {
        this.productId = productId
        this.name = name
        this.price = price
    }

    total(quantity) {
        return this.price * quantity
    }
}

class PersonalCareProduct extends Product {
    constructor(productId, name, price, warranty) {
        super(productId,name,price)
        this.waranty = warranty
    }

    total(quantity) {
        const totalPrice = super.total(quantity)
        return totalPrice + " " + this.waranty
    }
}

const SkinCare = new PersonalCareProduct(1, 'Shabolda', 15, '12:12:12')

console.log(SkinCare.total(12))