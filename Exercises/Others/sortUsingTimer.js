const array = [1,0,9,2,5,3,6,32,4]

let result = []

for(const number of array) {
    setTimeout(() => {
        result.push(number)
    }, number)
}