function filter(l){
    let numbers = []

    for(let i = 0; i <= l.length; i++){
        if(typeof l[i] === 'number') {
            numbers.push(l[i])
        }
    }
    return numbers
}

const l = [1,2,'a','b']

console.log(filter(l))

// Filtere a list from the strings 