//* Iterable objects are objects
//* that can be iterated over with for...of

//Tehnically iterables must implement the 
//Symbol.iterator method

//Iterables are Array, TypedArrays, String, Map, Set / Object is not

for (const x of [1, 2, 3, 4, 5]) { }
// or
for (const x of 'someString') { }


//* Javascript iterators

//The iterator protocol defines how to produce a sequence of values from an object.

//An object becomes an iterator 
//when it implements a next() method
// with two values: 'value' and 'done'


//*Home made iterable below
function myNumbers() {
    let n = 0;

    return {
        next: function () {
            n += 10;
            return { value: n, done: false }
        }
    }
}

const n = myNumbers()
n.next() // Returns 10
n.next() // Returns 20
n.next() // Returns 30

//The problem it that 
//It does not support the JS for...of statement 

//A JS iterable is an object that has a Symbol.iterator
// that returns a next() function
//* example below
myNumbers = {}

myNumbers[Symbol.iterator] = function () {
    let n = 0
    done = false
    return {
        next() {
            n += 10
            if (n === 100) { done = true }
            return { value: n, done: done }
        }
    }
}

// Now we can use for...of
for (const x of myNumbers) { }

// The symbol iterator method is called automatically by for...of
//* But we can also do it "manually"

let iterator = myNumbers[Symbol.iterator]

while (true) {
    const result = iterator.next()
    if (result.done) break
}


//* Other examples

class Foo {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
    }
}

const someObj = {
    *[Symbol.iterator]() {
        yield a;
        yield b;
    }
}

console.log(...new Foo()) // 1,2,3
console.log(...someObj) // 'a', 'b'

// using a Generator function

const myIterable = {}
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
}
console.log([...myIterable]) // [1,2,3]





