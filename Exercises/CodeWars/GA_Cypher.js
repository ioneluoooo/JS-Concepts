function encode(str) 
{
    let string = str.split(' ');
    for(let i = 0; i < string.length; i++) {
        let word = string[i].split('');
        for(let j = 0; j < word.length; j++) {
            switch(word[j]) {
                case  'G' : word[j] = 'A'; break;
                case  'g' : word[j] = 'a'; break;
                case  'a' : word[j] = 'g'; break;
                case  'A' : word[j] = 'G'; break;
                case  'D' : word[j] = 'E'; break;
             }
        }
      string[i] = word.join('')
    }
  return string.join(' ')
}

//  function encode(str) 
// {
//     const toEncode = ['A', 'E', 'Y', 'O', 'U', 'I'];
// const decoded = ['G', 'D', 'R', 'P', 'L', 'K'];

// let words = str.split(' ');

// for (let i = 0; i < words.length; i++) {
//     let characters = words[i].split('');

//     for (let j = 0; j < characters.length; j++) {
//         let index = toEncode.indexOf(characters[j]);
        
//         if (index !== -1 || toEncode.includes(characters[j].toLowerCase())) {
//             characters[j] = decoded[index];
//         }
//     }

//     words[i] = characters.join('');
// }

// return words.join(' ');
// }

// function decode(str) 
// {
//         switch(string[word]) {
//         case "G" : return "A"
//         case "g" : return "a"
//         case "a" : return "g"
//         case "A" : return "G"
//         case "D" : return "E"
//     }
// }
