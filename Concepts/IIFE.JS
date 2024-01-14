//* IIFE - immediately invoked function expression,
// is a JAVASCRIPT function that runs as soon as it is defined 

(function() {
    return 'This is something smth'
}) // anonymous function with lexical scope enclosed

(() => {
    return 'smth'
})() // creates the immediately invoked function expression 

//* We can use IIFE pattern if we have some initiation code that we wont use again, like: 

(() => {
    // some initiation code
    let firstVariable;
    let secondVariable;
})()
// firstVariable and secondVariable will be discarded after the function is executed, in other words will be deleted

