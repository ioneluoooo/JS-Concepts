//* __proto__ , all the objects contain proto
//* __proto__ accessor property of Object instances exposes the [[Prototype]](either an object or null) of this object

let man = {} // man.__proto__ = true
let users = [] // users.__proto__ = true
let age = 18 // age.__proto__ = true
let string = '123' // string.__proto__ = true

//* if it is a primitive and we invoke it through a point, like x.smth, then inside the memory, it will create a temporary object representation of this primitive

function fn() {} // foo.__proto__ = true
let smth = function() {} // smth.__proto__ = true
let foon = () => {} // foo.__proto__ = true
class foo {} // foo.__proto__ = true
let bool = true // bool.__proto__ = true


let man2 = {}
let man3 = {}
console.log(man2.__proto__ === man3.__proto__) // true, because __proto__ is forever equal to __proto__
// only if the variables are the same type

let cars = []
let people = []
console.log(cars.__proto__ === people.__proto__) // true

let ag = 18
let level = 100
console.log(ag.__proto === level.__proto__) // true

console.log(bool.__proto__ === foo.__proto__) // false, because they are two different types 




//* every variable proto's reference to the prototype of the object that it was created

// Example

let muie = {} // muie.__proto__ === Object.prototype
let grind = [] // grind.__proto__ === Array.prototype
let tuda = "siuda" // tuda.__proto__ === String.prototype
let num = 4 // num.__proto__ === Number.prototype