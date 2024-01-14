const array = [1,4,5,8,1,2,5,3,5,12,521]
let count = 0

function linearSearch(array, item) {
    for(let i = 0; i < array.length; i++) {
        count += 1
        if(array[i] === item) {
            return `${item} is the ${i} element`;
        }
    }
    return null;
}

console.log(linearSearch(array, 5456))
console.log("count =", count)

// O^n