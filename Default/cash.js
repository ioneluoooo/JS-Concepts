function cash(fn) {
    const cash = {}
    return function (n) {
        if(cash[n]) {
            console.log('From cash', cash[n])
            return cash[n]
        }
        let result = fn(n)
        console.log('From function', result)
        cash[n] = result
        return result
    }
}

function factorial(n) {
    // if (n === 1) {
    //     return 1
    // }
    // return n * factorial(n - 1)
    let result = 1
    while (n != 1) {
        result *= n
        n -= 1
    }
    return result
}


const cashFactorial = (cash(factorial))

cashFactorial(5)
cashFactorial(4)
cashFactorial(3)
cashFactorial(2)
cashFactorial(5)