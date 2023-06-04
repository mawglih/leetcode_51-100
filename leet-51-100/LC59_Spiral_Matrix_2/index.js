/**
 * Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.
 * 
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const matrix = new Array(n).fill(0).map(row => new Array(n).fill(0));
    let left = 0;
    let right = n - 1;
    let top = 0;
    let bottom = n - 1;
    let count = 1;
    while(left <= right && top <= bottom && count <= n * n ){
        for(let i = left; i <= right; i++) {
            matrix[top][i] = count;
            count++;
        }
        top++;
        for(let i = top; i <= bottom; i++) {
            matrix[i][right] = count;
            count++;
        }
        right--;
        for(let i = right; i >= left && top <= bottom; i--) {
            matrix[bottom][i] = count;
            count++;
        }
        bottom--;
        for(let i = bottom; i >= top && left <= right; i--) {
            matrix[i][left] = count;
            count++;
        }
        left++;
    }
    return matrix;
};

console.log(generateMatrix(3));

//runtime 57ms
// memory 42.1 mb