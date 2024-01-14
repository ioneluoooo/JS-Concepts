function getTheWinner(matrice) {
 
    let maxSum = -1
    let winner = ''

    for (let j = 0; j < matrice.length; j++) { 
        let sum = 0
        for (let i = 0; i < matrice[j].length; i++) {
            sum += matrice[i][j]
        }

        if(sum > maxSum) {
            maxSum = sum
            winner = `Studentul ${j + 1}`
        }
    }
    return `The winner is ${winner} with the sum of ${maxSum}`
}

const matrice = [[32,42,21],[231,41,42],[341,42,424]]

console.log(getTheWinner(matrice))

// for (let i in matrice) aceeasi ce si for(let i = 0 ...)

// for(const i of matrice) , formeaza variabile noi pentru fiecare iteratie