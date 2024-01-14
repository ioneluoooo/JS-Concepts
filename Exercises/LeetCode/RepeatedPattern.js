function get(s) {
    if (s.length % 2 === 0) {
        if (s.length % 3 !== 0) {
            let middle = s.length / 2;
            let firstHalf = s.substring(0, middle);
            let secondHalf = s.substring(middle);
            return firstHalf === secondHalf;
        } else {
            let partLength = s.length / 3;
            let firstPart = s.substring(0, partLength);
            let secondPart = s.substring(partLength, 2 * partLength);
            let thirdPart = s.substring(2 * partLength);
            return firstPart === secondPart && secondPart === thirdPart;
        }
    } else {
        return false;
    }
}

console.log(get('abcabcabcabc'))
