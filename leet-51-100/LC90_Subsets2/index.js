/**
 * Given an integer array nums that may contain duplicates, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:
Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

Example 2:
Input: nums = [0]
Output: [[],[0]]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort();
    let output = [];
    backtracking(0, [], nums, output);
    return output;
};

function backtracking(index, list, nums, output) {
    if(index > nums.length) return;
    output.push([...list]);
    for(let i = index; i < nums.length; i++) {
        if(i > index && nums[i] === nums[i - 1]) continue
        list.push(nums[i]);
        backtracking(i+1, list, nums, output);
        list.pop();
    }
    return output;
}

console.log(subsetsWithDup([1,2,2,3]));

// runtime 70 ms
// memory 44.5 MB