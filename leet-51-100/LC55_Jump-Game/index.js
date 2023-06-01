/**
 * You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position. Return true if you can reach the last index, or false otherwise.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let index = nums.length - 1;
    for(let i = nums.length - 1; i >= 0; i--) {
        if(i + nums[i] >= nums.length - 1 || i + nums[i] >= index) {
            index = i;
        }
    }
    return index === 0;
};

const n = [2,3,1,1,4];
console.log(canJump(n));