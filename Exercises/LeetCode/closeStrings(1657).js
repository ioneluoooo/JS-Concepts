function closeStrings(word1, word2) {
    let freq1 = new Array(26).fill(0)
    // [0,0,0,0...*26]
    let freq2 = new Array(26).fill(0)

    for(let lt of word1) {
        freq1[lt.charCodeAt(0) - 'a'.charCodeAt(0)]++
        // increasing the 0 => 1 to 
        // check how many of each letter we have
    }

    for(let lt of word2) {
        freq2[lt.charCodeAt(0) - 'a'.charCodeAt(0)]++
    }

    for (let i = 0; i < 26; i++) {
        if ((freq1[i] === 0 && freq2[i] !== 0) || (freq1[i] !== 0 && freq2[i] === 0)) {
            return false;
        }
    }

    freq1.sort((a,b) => a - b)
    freq2.sort((a,b) => a - b)

    for(let i = 0; i < 26; i++) {
        if(freq1[i] !== freq2) {
            return false
        }
    }

    return true
}

console.log(closeStrings('cabbba' , 'abbccc'))