// The 'new' operator lets us create a instance
// of a user-defined object type
// or of one of the built-in object types
// that has a constructor function

function Car(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
}

const car1 = new Car('Eagle', 'Talon TSi', 1993)
console.log(car1.make) // Eagle

// the `new` operator creates an empty object

// the `prototype` property of the constructor
// is assigned to the __proto__ property
// of the newly created object
// this allows inheritance of methods and properties

// constructor is executed with the given arguments
// binding our new object as the `this` context 


// If the constructor func returns an object
// that objects becomes the entire `new` expression

function MyClass(){
    this.name = 'John'

    return { name: 'Godzilla'}
}

const instance = new MyClass();
console.log(instance.name) //Godzilla


// If the constructor function returns
// a primitive value or nothing 
// it returns undefined

function AnotherClass(){
    // No explicit return or 
    return '123'
}

const anotherInstance = new AnotherClass()
console.log(anotherInstance) // AnotherClass {}

