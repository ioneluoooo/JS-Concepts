function getDuplicates(arr) {
    let seenNumbers = new Map();
    
    for(let i = 0; i <= arr.length; i++) {
        if(seenNumbers.has(arr[i])) {
            console.log(i, seenNumbers.get(arr[i]))
        }
        else seenNumbers.set(arr[i], i)
    }
}

const duplicates = [10,20,15,30,10,20,60,15]

console.log(getDuplicates(duplicates))

// getting the second index where the duplicate is and the first index where is was