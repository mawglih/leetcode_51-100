/**
 * Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n. Return the answer in any order. 

Example 1:
Input: n = 3
Output: [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]

Example 2:
Input: n = 1
Output: [[1]]
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    const res = [];
    var generateTreesRec = function(n, l, r, res = []) {
        for(let i = l; i <= r; i++){
            for(const left of generateTreesRec(n, l, i - 1)){
                for(const right of generateTreesRec(n, i + 1, r)){
                    res.push({val: i, left, right});
                }
            }
        }
        return n ? res.length ? res : [null] : [];
    };
    return generateTreesRec(n, 1, r = n,[])
}