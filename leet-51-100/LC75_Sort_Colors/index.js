/**
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

Example 1:
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Example 2:
Input: nums = [2,0,1]
Output: [0,1,2]
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let p1 = 0;
    let p2 = nums.length - 1;
    let curr = 0;
    let tmp = 0;
    while(curr <= p2) {
        if(nums[curr] === 0) {
            tmp = nums[p1];
            nums[p1++] = nums[curr];
            nums[curr++] = tmp;
        } else if(nums[curr] === 2) {
            tmp = nums[curr];
            nums[curr] = nums[p2];
            nums[p2--] = tmp
        } else {
            curr++;
        };
    }
    return nums;
};

console.log(sortColors([2,0,2,1,1,0]));


// runtime 68 ms
// memory 41.6 MB