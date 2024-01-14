function slidingWindow(arr, k) {
    let maxSum = 0;
    let tempSum = 0;

    // initialize the window
    for (let i = 0; i < k; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    // slide the window over the array

    for(let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;

}