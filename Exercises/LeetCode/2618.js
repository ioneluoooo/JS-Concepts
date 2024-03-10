class Animal {}

class Dog extends Animal {}

let obj = new Dog();

//console.log(Animal.prototype);

//console.log(Dog.prototype);

//console.log(obj.constructor.prototype);

//console.log(Number.prototype);

let x = 5;
//console.log(x.__proto__);

function getProto(obj, classFunction) {
  return obj.constructor.prototype === classFunction.prototype
}
function Container(value) { this.value = value; }; 
function Box(value) { this.value = value; }; 
const b = new Box(1);

console.log(getProto(obj, Animal))
console.log(obj.__proto__.constructor.constructor)
console.log(Animal.constructor)

//console.log(b.constructor)
//console.log(Box.__proto__)

