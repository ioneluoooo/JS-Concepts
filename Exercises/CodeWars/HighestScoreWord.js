// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let splittedString = x.split(' ');
    let maxScore = 0;
    let maxWord = '';

    for (let i = 0; i < splittedString.length; i++) {
        let word = splittedString[i];
        let wordScore = 0;

        for (let j = 0; j < word.length; j++) {
            let letter = word[j]
            if (alphabet.includes(letter)) {
                wordScore += alphabet.indexOf(letter) + 1
            }
        }

        if (wordScore > maxScore) {
            maxScore = wordScore;
            maxWord = word
        }
    }
    return maxWord;
}

console.log(high('This is a taxi'))