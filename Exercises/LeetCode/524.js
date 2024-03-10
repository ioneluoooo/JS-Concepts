function findLongestWord(s, dictionary) {
  for (let word of dictionary) {
    word = word.split("");
    for (let ch of word) {
      if (!s.includes(ch)) {
        s = s.replace(ch, "");
      }
    }
  }

  return s
}

console.log("abpcplea")
