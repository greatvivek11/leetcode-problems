/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.



Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]


Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k = k % nums.length;
    let temp = new Array(nums.length);
    
    for (let i = 0; i < nums.length; i++) {
        temp[(i + k) % nums.length] = nums[i];
        console.log(temp)
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = temp[i];  
    }
    return nums
};

// Test cases (from the problem description)
var nums1 = [1, 2, 3, 4, 5, 6, 7];
rotate(nums1, 3);
// console.log(nums1); // Expected: [5,6,7,1,2,3,4]

// var nums2 = [-1, -100, 3, 99];
// rotate(nums2, 2);
// console.log(nums2); // Expected: [3,99,-1,-100]
