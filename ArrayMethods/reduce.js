function reducing(smth) {
    return smth.reduce((accumulator,currentValue) => accumulator + currentValue)
}
let smth = [23,32,45]

console.log(reducing(smth))