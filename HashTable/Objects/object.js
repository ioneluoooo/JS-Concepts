//****************** CREATING OBJECTS ****************************//

//* OBJECT LITERAL *//
// the keys cannot be other data types other than String or Symbol
let person = {
    name: 'John',
    age: 30,
    occupation: 'Engineer'
}

//* OBJECT CONSTRUCTOR *//
let person2 = new Object();
person2.name = 'John'
person2.age = 30;
person2.occupation = 'Enginner'


//****************** ACCESSING OBJECT PROPERTIES ****************************//

console.log(person.name) || console.log(person["age"])

//****************** ADDING and MODIFYING Properties ****************************//

person.gender = 'Male' // Adding a new property
person.age = 31 // Modifying a existing property

//****************** REMOVING Properties ****************************//

delete person.occupation

//****************** OBJECT METHODS ****************************//

let person3 = {
    name: 'John',
    sayHello: function() {
        console.log('Hello my name is' + this.name)
    }
}

person.sayHello() // Calling the function 


//****************** OBJECT ITERATION ****************************//

// You can iterate over object properties using 'for...in' loop or Object.keys(), Object.values(), and Object.entries() methods

for(let key in person) {
    console.log(key + ':' + person[key]) // in our case our key can be 'name' or 'age'
}

// using Object.keys()
Object.keys(person).forEach(key => {
    console.log(key + ':' + person[key])
})


//****************** OBJECTS as ASSOCIATIVE ARRAYS ****************************//

let colors = {
    'red' : '#FF0000',
    'green' : '#00FF00',
    'blue': '#0000FF'
} // similar to a hash table or Map Object


//****************** OBJECT PROTOTYPES and INHERITANCE****************************//

let animal = {
    eat: function () {
        console.log('Eating...')
    }
}

let dog = Object.create(animal) 

dog.bark = function() {
    console.log('Barking...')
}

dog.eat() //* Inherited method
dog.bark() //* Own method

//****************** EQUALITY ****************************//

// In js two empty objects are not equal , because the == or === operators compare object references, not the content of the objects 

let obj1 = {}
let obj2 ={}

console.log(obj1 === obj2) // false
console.log(obj1 == obj2) // false


//Even the objects are equal in values they are not equal

let obj3 = { name: 'John' }
let obj4 = { name: 'John' }

console.log( obj3 === obj4) // false
console.log( obj3 == obj4) // false
// That is because they are not the same object, they are just two separate objects with the same propeties and values , so basically they are two different instances in the memory


let obj = {name : 'John'}

let objRef = obj

console.log(obj === objRef) // true
console.log(obj == objRef) // true




