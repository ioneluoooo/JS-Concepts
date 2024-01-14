"use strict"

const person = {
    //there this refers to the person object
    name: "John",
    getName() {
        return this.name;
    }
}

console.log(person.getName())


let x  = this
// There 'this' is used alone so it returns a global object [object Window]
console.log(x)

function snth(){
    return this
}

console.log(snth()) // returns undefined if strictmode, else returns a global object



const person1 = {
    // there this refers to the person2 object
    fullName: function() {
        return this.Name + " " + this.Surname
    }
}

const person2 = {
    Name: "John",
    Surname: "Doe"
}

console.log(person1.fullName.call(person2))


const person213 = {
    firstName: "John",
    lastName: "Ivlov",
    foo: () => {
        return this.firstName + "" + this.lastName
    } // there will return undefined because
    // in arrow functions 'this' does not have its 
    // own 'this' context, instead
    // it captures the 'this' value from its surrounding
    //* Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
}

