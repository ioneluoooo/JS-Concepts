//* The bind method creates a new function
//* and sets the 'this' keyword
//* to the specified object

const john = {
    name: "John",
    age: "24"
}
const jane = {
    name: "Jane",
    age: "22"
}

function greeting() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old`)
}
// Here we are creating a new function with
// 'this' set to john object
const greetingJohn = greeting.bind(john)
greetingJohn()

const greetingJane = greeting.bind(jane)
greetingJane()

//* The call method sets the 'this'
//* inside the function and immediately executes it

// The difference between the call() and bind()
// is that the call() sets the context 
// and executes the function immediately 
// and it does not create a copy of the function


function greet() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old`)
}

greet.call(john)
greet.call(jane)

//* The apply method is similar to call()
// The difference is that the apply() method
// accepts an array of arguments instead of comma separated values

function foo(thisArg, [argumentsArr]){}
//apply() method getting arguments

function foo(thisArg, argument1, argument2){} 
// call() method getting arguments

function greet(greeting, lang) {
    console.log(lang)
    console.log(`${greeting}, I am ${this.name} and I am ${this.age} years old`)
}

greet.apply(john)
greet.apply(jane) // Hi i am jane and i am 24 years old...