function count(string) {
    let counted = {}
    let splittedString = string.split('')

    for (let i = 0; i < splittedString.length; i++) {
        if (counted[splittedString[i]]) {
            counted[splittedString[i]]++
        } else {
            counted[splittedString[i]] = 1
        }
    }
    return counted
}

const string = 'aba'
console.log(count(string))
