function frequency(queries, words) {
  let res = [];

  // frequency of query
  queries = queries.map((q) => countFrequency(q)); //[3,2]

  //frequency of words
  words = words.map((w) => countFrequency(w)); //[1,2,3,4]

  //sorting in assending   order
  words = words.sort((a, b) => a - b);

  //iterate over and do binary search
  for (let i of queries) {
    console.log(i)
    //start and end pointer
    let start = 0,
      end = words.length - 1;

    // classic binary search
    while (start <= end) {
      let mid = parseInt((start + end) / 2);
      console.log("start , mid , end", start, mid, end);
      if (i < words[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    res.push(words.length - 1 - end);
  }

  return res;
}

function countFrequency(str) {
  let freq = {};

  for (let i of str) {
    freq[i] ? (freq[i] += 1) : (freq[i] = 1);
  }

  return freq[Object.keys(freq).sort()[0]];
}

console.log(frequency(["bbb", "cc", "ddadf"], ["a","aa","aaa","aaaa"]))


// a solution I found at LeetCode that for me is interesting 