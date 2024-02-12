const data = [4,0,1,8,5,9]

const sorted = []
const count = new Array(Math.max(...data) + 1).fill(0)

for(let i = 0; i < data.length; i++) {
    count[data[i]]++
}

console.log(count)

for(let i = 0; i < count.length; i++) {
    while(count[i] > 0) {
        sorted.push(i)
        count[i]--
    }
}

console.log(sorted)