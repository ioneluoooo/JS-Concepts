const array = [1,5,2,6,9,3,732,53,-5,-2]
let count = 0

function bubbleSort(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if(array[j+1] < array[j]) {
                let tmp = array[j]
                array[j] = array[j + 1]
                array[j+1] = tmp
            }
            count+=1
        }
    }
    return array
}

console.log('length', array.length)
console.log(bubbleSort(array)) // O(n*n)
console.log('count = ', count)
