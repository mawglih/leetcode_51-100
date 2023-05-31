/**
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 * 
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let len = matrix[0].length;
    let height = matrix.length;
    let pointerL = 0
    let pointerT = 0
    let pointerR = len - 1;
    let pointerB = height - 1;
    let output = [];
    while(pointerL <= pointerR && pointerT <= pointerB) {
        for (let i = pointerL; i <= pointerR; i++) {
            output.push(matrix[pointerT][i]);
        }
        pointerT++;
        for(let i = pointerT; i <= pointerB; i++) {
            output.push(matrix[i][pointerR]);
        }
        pointerR--;
        for(let i = pointerR; i >= pointerL && pointerT <= pointerB; i--) {
            output.push(matrix[pointerB][i]);
        }
        pointerB--;
        for(let i = pointerB; i >= pointerT && pointerL <= pointerR; i--) {
            output.push(matrix[i][pointerL]);
        }
        pointerL++;
    }
    return output;
};

const m = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
console.log(spiralOrder(m));

// runtime 36ms
// memory 41.8 ms