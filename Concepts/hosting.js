

//* Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

// errors 
console.log(x)
let x = 12;

console.log(y)
const y = 13

// not an error, just undefined

console.log(z)
var z = 14

// Function do not give a fuck about hoisting cause they are declared + Function Express or Function Declaration


//* Function declaration, will not throw an error

console.log(xyz())

function xyz() {
    return 14;
}

//* Function expression , will throw an error

console.log(abc())

let abc = function() {
    return 'asfa';
}

