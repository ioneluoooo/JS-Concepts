const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: () => {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName()) // will return undefined


const person2 = {
   
    fullName: () => {
        let firstName = "John"
        let lastName = "Doe"
        return firstName + " " + lastName;
    }
};

console.log(person2.fullName()) // will return John Doe



function foo() {
    const x = 10
    // is not used
    return {
        x: 20,
        bar: () => {
            console.log(this.x)
        },
        baz: function() {
            console.log(this.x)
        }
    }
}

const obj1 = foo()
obj1.bar() //* output undefined
// bcuz 'bar' is an arrow function
// meaning it captures 'this' from its surroundings
// which is global scope
// so 'this' will be the window.x context
// so will return undefined 

obj1.baz() //* output 20
// regular function
// meaning this will refer to 'x', so it gets value 20

const obj2 = foo.call({x: 30})
// invoking foo() with the provided 'this' context


let y = obj2.bar
let z = obj2.baz
y() //* output 30
// y = bar() that is an arrow function
// meaning it gets the context from its surrounding scope
// x:30 is the provided context so y = 30


z() //* output undefined
// z = baz = regular function
// that is called without an explicit context
// in this case 'this' will get the global context
// that is window , that is undefined, 
// there for z we assign the reference of the baz
// so when we invoke z, we invoke it as a standalone function, that is why we get undefined

obj2.bar() //* output 30
// as y, this will refer to the surrounding scope, to the x: 30

obj2.baz() //* output 20
// there it will be 20, bcuz obj2.baz is called as a method of 'obj2', inside the func it referes to the x of obj2 which is 20.