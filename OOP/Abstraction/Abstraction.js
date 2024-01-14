class Shape {
    constructor(color) {
        this.color = color
    }

    calculateArea() {
        throw new Error('METHOD is not implemented')
    }

    displayInfo() {
        return `${this.color} , Area: ${this.calculateArea}`
    }
}


class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}

class Square extends Shape {
    constructor(color, side) {
        super(color);
        this.side = side;
    }

    calculateArea() {
        return this.side ** 2;
    }
}

// Example usage showcasing abstraction
const redCircle = new Circle('red', 5);
const blueSquare = new Square('blue', 4);

console.log(redCircle.displayInfo());       // Output: Color: red, Area: 78.54 (approximately)
console.log(blueSquare.displayInfo());      // Output: Color: blue, Area: 16