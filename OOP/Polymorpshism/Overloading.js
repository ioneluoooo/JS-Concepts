//* Overloading involves defining multiple methods in the same class with the same name but different parameter lists

class Calculator {
    add(a, b) {
        return a + b
    }

    add(a, b, c) {
        return a + b + c
    }
}

const calculator = new Calculator()

console.log(calculator.add(2, 3));       // Output: NaN (second add method is used)
console.log(calculator.add(2, 3, 4));    // Output: 9

//* JavaScript does not natively suport the overloading method 
//* the last definition overwrites any previous ones 
//* so the right code should be 


class RightCalculator {
    add(a, b, c) {
        if(c === undefined) {
            return a  + b
        }
        else return a + b + c
    }
}3
  