function twoSum(nums, k){
    let left = 0, right = nums.length - 1
    let result = []

    while(left < right){
        let sum = nums[left] + nums[right]

        if(sum === k){
            result.push([nums[left], nums[right]])
        } 
        if(sum < k){
            left++
        } else {
            right--
        }
    }

    return result
}

console.log(twoSum([1,2,3,4,5], 7))

// O(n) - time complexity 
// O(1) - space complexity