//* Closures are a behvaiour of the js
//* where global variables can be made local 

let x = 1

function logToConsole() {
    console.log(x)
}

logToConsole() // will get 1


let y = 0

function consoleLog() {
    console.log(y)
}

y = 2

consoleLog() // will get 2 because y is redeclared


function makeCounter(count) {
    return function () {
        return count++
    }
}

let counter = makeCounter(0)
// different objects
let counter2 = makeCounter(0)

alert(counter()) // 0 
alert(counter()) // 1

alert(counter2()) // 0
alert(counter2()) // 1


function createIncrement() {
    let count = 0
    function increment() {
        count++
    }

    function log() {
        let message = `Count is ${count}`
        console.log(message)
    }

    return [increment, log]
}

const [increment, log] = createIncrement()
increment() // 1
increment() // 2
increment() // 3
log() // 0
