/**
 * Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n]. You may return the answer in any order.

Example 1:
Input: n = 4, k = 2
Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
Explanation: There are 4 choose 2 = 6 total combinations.
Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.

Example 2:
Input: n = 1, k = 1
Output: [[1]]
Explanation: There is 1 choose 1 = 1 total combination.
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const factorial = x => {
        if(x <= 1) return 1;
        return x * factorial(x - 1);
    }
    let P = factorial(n) / (factorial(n - k) * factorial(k));
    let output = [];
    const builder = (start = 1, tupple = []) => {
        if(tupple.length === k) {
            output.push(Array.from(tupple));
        } else {
            for(let i = start; i <= n; i++) {
                tupple.push(i);
                builder(i + 1, tupple);
                tupple.pop();
            }
        }

    }
    builder();
    return output;
};

console.log(combine(4, 2))

// runtime 103 ms
// memory 46.3 MB