//* A prototype is an independent object with its methods.
//*It is a special object which means it holds shared attributes and behaviors of instances.

function Samurai(name) {
    this.name = name
}

Samurai.prototype.hello = function() {
    console.log(this.name)
}

// All this we could construct as a class
// When we initiate methods in a class 
// and then call them
// the engine goes through proto and prototypes 
// and creates a prototype with this method

let shogun = new Samurai('Ivan')

shogun.hello()// it searches through shogun.__proto__ firstly to check if the hello method persists
// if not then
// it searches the prototype of the object
// it was created with
// shogun.__proto__ => Samurai.prototype
// and will find the hello method
// and will make it native


console.log(({}).prototype === ({}).__proto__) // false, only constructor functions have prototype

function Hello(){}
console.log(Hello.prototype === Hello.__proto__)
// false
// because Hello.__proto__ === Function.prototype
// and two prototypes cannot be equal

function Youtube(){}
function Facebook(){}
console.log(Youtube.__proto__ === Facebook.__proto__)
// true
console.log(Youtube.prototype === Facebook.prototype)
// false
// because two prototypes cannot be equal

let age = 18
console.log( age.prototype === Number.prototype) 
// false
console.log(age.__proto__ === Number.prototype)
// true

class Haker {}
console.log(Haker.__proto__ === Function.prototype)
//true

function Incubator(){}
console.log( Incubator.__proto__ === Function.prototype) // true

console.log(shogun.__proto__.__proto__ === Object.prototype) 

console.log(shogun.__proto__.constructor.__proto__ === Function.prototype) 
// constructor refers to the to the constructor function used to create 'shogun'

console.log(shogun.__proto__.__proto__.__proto__ === null)



