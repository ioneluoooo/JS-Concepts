function getSquares(n) {
  let dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    console.log(`iteration ${i}, i = ${i}`)
    for (let j = 1; j * j <= i; j++) {
        console.log(`iteration ${i}, j = ${j}`)
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
      console.log(dp[i])
    }
  }

  console.log(dp)
  return dp[n];
}

console.log(getSquares(13))
