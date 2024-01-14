class Shape {
    area() {
      // Implementation depends on the specific shape
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius ** 2;
    }
  }
  
  class Square extends Shape {
    constructor(side) {
      super();
      this.side = side;
    }
  
    area() {
      return this.side ** 2;
    }
  }
  
  const circle = new Circle(5);
  const square = new Square(4);
  
  console.log(circle.area());  // Output: 78.54
  console.log(square.area());  // Output: 16
  