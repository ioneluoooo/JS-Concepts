class Shape {
    calculateArea() {
        throw new Error('Method not implemented')
    }
}

class Circle extends Shape {
   constructor(radius) {
    super()
    this.radius = radius
   }

   calculateArea() {
    return Math.PI * this.radius * this.radius
   }
}

const circle = new Circle(6)

console.log(circle.calculateArea())