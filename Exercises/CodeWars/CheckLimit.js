function CheckLimit(a, limit) {
    let  limitedArray = a.filter(value => value <= limit);
    return limitedArray.length === a.length
}

const a = [1,2,3,4]

console.log(CheckLimit(a, 3)) // false
console.log(CheckLimit(a, 5)) // true
