function NiceArray(nums, k) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let oddCount = 0;
    for (let j = i; j < nums.length; j++) {
      if (nums[j] % 2 !== 0) {
        oddCount++;
      }

      if (oddCount === k) {
        count++;
      }
    }
  }

  return count;
}

// works only with small arrays :)

function NiceArray2(nums, k) {
  let odds = 0;
  let count = 0;
  let prefix = 0;

  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] % 2 != 0) {
      odds += 1;
      prefix = 0;
    }

    while (odds == k && i <= j) {
      if (nums[i] % 2 != 0) odds -= 1;
      i++;
      prefix++;
    }

    count += prefix;
  }
  return count;
}

// works perfectly

// Initialization: Initially, odds is 0, count is 0, and prefix is set to 0. The pointers i and j are both at the beginning of the array (i = 0, j = 0).

// First Iteration (j = 0):

// The element at j is 1, which is odd. So, odds becomes 1, and prefix is still 0.
// Since odds !== k, we don't enter the while loop. j increments to 1.
// Second Iteration (j = 1):

// The element at j is 1, which is odd. Now, odds becomes 2, and prefix is still 0.
// Since odds !== k, we don't enter the while loop. j increments to 2.
// Third Iteration (j = 2):

// The element at j is 2, which is not odd. odds remains 2, and prefix is still 0.
// Since odds !== k, we don't enter the while loop. j increments to 3.
// Fourth Iteration (j = 3):

// The element at j is 1, which is odd. Now, odds becomes 3, and prefix is still 0.
// Since odds === k, we enter the while loop.
// Inside the loop, we check if nums[i] (which is nums[0]) is odd. It is, so we increment prefix and i, and decrement odds.
// After this, i becomes 1, odds becomes 2, and prefix becomes 1.
// We exit the while loop.
// Fifth Iteration (j = 4):

// The element at j is 1, which is odd. Now, odds becomes 3, and prefix is still 1.
// Since odds === k, we enter the while loop.
// Inside the loop, we check if nums[i] (which is nums[1]) is odd. It is, so we increment prefix and i, and decrement odds.
// After this, i becomes 2, odds becomes 2, and prefix becomes 2.
// We exit the while loop.
// Conclusion:

// At the end of the iterations, count will be 3 because there are three subarrays [1, 1, 2, 1, 1] where the number of odd elements is 3 (as required by k).
