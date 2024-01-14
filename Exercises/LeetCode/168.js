function convertToColumn(columnNumber) {
    let ans = '';

    while(columnNumber>0) {
        // loops till columnNumber becomes zero
        let code = (--columnNumber)%26

        ans = String.fromCharCode(code+65) + ans;
        columnNumber = (columnNumber-code)/26;
    }

    return ans;
}

console.log(convertToColumn(451))