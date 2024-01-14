const array = [6,4,3,1,5,2,7,9,8,24,-5.5,-5,15,34,733]
let count = 0

function selectionSort(array) {
    for(let i = 0; i < array.length; i++) {
        let indexMin = i;
        for(let j = i+1; j < array.length; j++) {
            if(array[j] < array[indexMin]) {
                indexMin = j
            }
            count += 1
        }
        let tmp = array[i]
        array[i] = array[indexMin]
        array[indexMin] = tmp
    }
    return array
}

console.log(selectionSort(array))
console.log("count = ", count)

// O(n^2)