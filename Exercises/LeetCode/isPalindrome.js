function isPalindrome(number) {
    let reversed = 0;
    let copy = number;

    while(number > 0) {
        // as example will take 121
        let digit = number % 10;
        // digit = 121 % 10 = 1
        reversed = reversed * 10 + digit;
        // reversed = 0*10 + 1 = 1
        number = Math.floor(number / 10);
        // number = 121 / 10 = 12.1 = ~~ 12 and so on
    }
    return reversed === copy;
}

console.log(isPalindrome(121))