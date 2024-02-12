const data = [4,0,1,8,5,9]
const sorted = Array.from(data)

for(let i = 1; i < sorted.length; i++) {
    // this algorithm i hate 
    let currentElement = sorted[i]
    let j = i - 1 

    while(j >= 0 && sorted[j] > currentElement) {
        sorted[j + 1] = sorted[j]
        j--
    }

    sorted[j+1] = currentElement
}

console.log(sorted)