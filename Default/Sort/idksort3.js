const data = [4,0,1,5,8,9]
const sorted = Array.from(data)

for(let i = 0; i < sorted.length; i++) {
    // setting a minIndex
    let minIndex = i

    for(let j = i + 1; j < sorted.length; j++) {
        // start the iteration from the next element from 'i' 
        if(sorted[j] < sorted[minIndex]) {
            // compare the current with all the elements and find the first smaller element 
            // if j < minIndex(i)
            minIndex = j
            // then change the minIndex to 'j', that is smaller than 'i'
        }
        // if the current element is the smallest it remains still
    }
    // creating a temporary varible that we atribute the current iteration number
    let temp = sorted[i]
    // swaping the 'i' with the current minIndex
    sorted[i] = sorted[minIndex]
    // atributing the temporary variable to our minIndex
    sorted[minIndex] = temp
}

console.log(sorted)