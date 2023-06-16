/**
 * There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values). Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4]. 
Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums. You must decrease the overall operation steps as much as possible.

Example 1:
Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true

Example 2:
Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        let mid = Math.floor((right + left) / 2);
        if(nums[left] === target) return true;
        if(nums[right] === target) return true;
        if(nums[mid] === target) return true;

        if(nums[mid] === nums[left]) {
            left++;
            continue;
        }
        if(nums[mid] > nums[left]) {
            if(nums[left] < target && nums[mid] > target){
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if(nums[right] > target && nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return false;
};

console.log(search([1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1], 2));

// runtime 64 ms
// memory 42.5 MB