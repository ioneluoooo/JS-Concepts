class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    calculateArea() {
        return this.width * this.height
    }

    calculatePerimeter() {
        return 2*(this.width + this.height)
    }
}

const cub = new Rectangle(3, 3)

console.log(cub.calculateArea())
console.log(cub.calculatePerimeter())