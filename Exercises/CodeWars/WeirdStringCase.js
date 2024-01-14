// Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

//* Examples 
// "String" => "StRiNg"
// "Weird string case" => "WeIrD StRiNg CaSe"


// function toWeirdCase(string) {

    
//     let weirdString = '';
//     let wordIndex = 0;

//     for (let i = 0; i < string.length; i++) {
//         if(string[i] === " ") {
//             wordIndex = 0;
//             weirdString += ' '
//         } else {
//             if(wordIndex % 2 === 0) {
//                 weirdString += string[i].toUpperCase();
//             } else {
//                 weirdString += string[i].toLowerCase();
//             }
//             wordIndex++;
//         }
        
//     }

//     return weirdString;
// }


function toWeirdCase(string) {
    return string
        .split(' ') // Split the string into words
        .map(word => {
            let weirdWord = '';
            for (let i = 0; i < word.length; i++) {
                weirdWord += i % 2 === 0 ? word[i].toUpperCase() : word[i].toLowerCase();
            }
            return weirdWord;
        })
        .join(' '); // Join the modified words back together with spaces
} // with forEach it will not work bcuz forEach returns the indeces of the entire element not the index of every character




console.log(toWeirdCase('Weird String Case'))
