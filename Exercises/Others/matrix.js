function getTheWinner(matrice){
    const ColumnSums = matrice.map((_, colIndex) => 
        matrice.reduce((acc, row) => acc + row[colIndex], 0) // 0 - initial value
    )

    const maxSum = Math.max(...ColumnSums)
    const winner = ColumnSums.indexOf(maxSum) + 1

    return `The winner is the ${winner} student`
}

// export {} // glitch due to legacy script files for ts

let smth = [[32,42,21],[231,41,42],[341,3233,424]]

console.log(getTheWinner(smth))