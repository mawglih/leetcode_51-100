/**
 * Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

Example 1:
Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 6
Explanation: The maximal rectangle is shown in the above picture.

Example 2:
Input: matrix = [["0"]]
Output: 0

Example 3:
Input: matrix = [["1"]]
Output: 1
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalRectangle = function(matrix) {
    if (!matrix.length) return 0;
    const rows = matrix.length;
    const columns = matrix[0].length;
    const newArr = new Array(rows).fill(0).map(cell => new Array(columns).fill(0));
    let maxArea = 0;
    console.log('new arr', newArr);
    console.log('arr', arr);
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        if(row === 0) {
            newArr[row][col] = matrix[row][col] == '1' ? 1 : 0;
        } else {
            newArr[row][col] = matrix[row][col] == '1' ? (newArr[row - 1][col] + 1) : 0;
        }
        let minHeight = newArr[row][col];
        for(let pointer = col; pointer >= 0; pointer--) {
           if (minHeight === 0) break;
           if (newArr[row][pointer] < minHeight) minHeight = newArr[row][pointer];
           maxArea = Math.max(maxArea, minHeight * (col - pointer + 1));
        }
     }
    }
    console.log('new arr2', newArr);
    return maxArea;  
  };

  const arr = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]];
  console.log(maximalRectangle(arr));
  
  //runtime 88 ms
  //memory 44.4. MB