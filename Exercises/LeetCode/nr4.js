function findMedian(nums1, nums2) {
    let merged = []
    let i = 0 , j = 0
    let middle = 0

    while(i < nums1.length && j < nums2.length) {
        if(nums1[i] < nums2[j]) {
            merged.push(nums1[i++])
        } else {
            merged.push(nums2[j++])
        }
    }

    while(i < nums1.length) merged.push(nums1[i++])
    while(j < nums2.length) merged.push(nums2[j++])

    if(merged.length % 2 === 0) {
        middle = Math.floor(merged.length / 2 - 1)

        return (merged[middle] + Math.floor(merged[middle + 1])) / 2
    } else {
        middle = Math.round(merged.length - 1)

        return merged[middle - 1]
    }
}

console.log(findMedian([1,124], [32,451]))