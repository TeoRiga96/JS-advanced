class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(figure){
    let area = 0;
    if(figure instanceof Square){
       area = Math.pow(square.side, 2);
    } else if (figure instanceof Rectangle){
      area = rectangle.height * rectangle.width;
    } else if (figure instanceof Circle){
      area = (Math.pow(circle.radius,  2)) * Math.PI
    }
    return area;
  }
  
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));