const data = [4,0,1,5,8,9]

for(const number of data) {
    setTimeout(() => {
        console.log(number)
    }, number)
}