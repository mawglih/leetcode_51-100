/**Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's. You must do it in place.

Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 * 
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let indices = [];
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] === 0) indices.push([i, j]);
        }
    }
    for(let i = 0; i < indices.length; i++) {
        let [r, c] = indices[i];
        matrix[r].fill(0);
        for(let n = 0; n < matrix.length; n++) {
            matrix[n][c] = 0;
        }
    }
    return matrix;
};

const m = [[1,1,1],[1,0,1],[1,1,1]];
console.log(setZeroes(m));

// runtime 77 ms
// memory 44.7 MB
