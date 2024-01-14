function matrix(matrix) {
    let result = [];
    for(let i = 0; i < matrix.length; i++){
        let minIndex = -1;
        let min = Infinity;

        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] < min){
                min = matrix[i][j]
            }
        }
        
        let max = -Infinity;
        
        for(let k = 0; k < matrix.length; k++){
            if(matrix[k][minIndex] > max){
                max = matrix[k][minIndex];
            }
        }

        if(max === min){
            result.push(max);
        }
    }
    return result;
}