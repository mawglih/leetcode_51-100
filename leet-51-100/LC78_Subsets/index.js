/**
 * Given an integer array nums of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Example 2:
Input: nums = [0]
Output: [[],[0]]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let output = [[]];
    for(let i = 0; i < nums.length; i++) {
        let curr = [nums[i]];
        let len = output.length;
        for(let j = 0; j < len; j++) {
            let arr = output[j].slice(0);
            arr.push(curr);
            output.push(arr);
        }
        
    }
    return output;
};


console.log(subsets([1,2,3]));

// runtime 67 ms
// memory 44.2 MB

var subsetsRecursive = function(nums) {
    let output = [];
    const builder = (start, tupple) => {
        output.push([...tupple])
            for(let i = start; i < nums.length; i++) {
                tupple.push(nums[i]);
                builder(i + 1, tupple);
                tupple.pop();
            }
    }
    builder(0, []);
    return output;
};

console.log(subsetsRecursive([1,2,3]));

// runtime 59 ms
// memory 44.1 MB