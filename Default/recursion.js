const factorial = (n) => {
    if(n === 1) {
        return 1
    }
    return n * factorial(n - 1)
}

const fibonaci = (n) => {
    if(n === 1 || n === 2) {
        return 1
    }
    return fibonaci(n-1) + fibonaci(n-2)
}

console.log(fibonaci(8))