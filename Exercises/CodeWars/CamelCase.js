function solution(string) {
    let splittedString = string.split('')

    for(let i = 0; i < splittedString.length; i++){
       if(splittedString[i] === splittedString[i].toUpperCase()){
        // should use the new array rather than the source string , cause it will cause index drift 
        splittedString.splice(i, 0, ' ')
        // i - where the change should be
        // 0 - how many elements should be removed
        // " " - what element should be inserted
        i++
        // The i++ statement ensures that the loop skips the inserted space and continues to the next character.
       }
    }
    return splittedString.join('')
}

console.log(solution('camelCasing')) //right

console.log(solution("camelCasingTest")) // right

