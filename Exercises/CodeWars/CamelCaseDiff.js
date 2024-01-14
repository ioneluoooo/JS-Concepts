function solution(string) {
    return result = string.replace(/([A-Z])/g, ' $1');
    
}
//This uses the replace method with a regular expression to find each uppercase letter ([A-Z]) and insert a space before it. The $1 in the replacement string refers to the matched uppercase letter


console.log(solution("camelCasingTest"))