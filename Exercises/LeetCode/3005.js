function maxFrequency(nums) {
  let count = Array.from({ length: 101 }, () => 0);

  for (let num of nums) {
    count[num]++;
  }

  let maxFreq = Math.max(...count);
  let occurences =
    count.filter((value) => value === maxFreq)

  return occurences.length * maxFreq
}

const nums = [
  81, 81, 81, 81, 81, 81, 81, 17, 28, 81, 81, 56, 81, 54, 81, 81, 81, 81, 81,
  60, 81, 28, 81, 81, 81, 81, 81, 54, 81, 81, 81, 81, 100, 28,
];

console.log(maxFrequency(nums));
