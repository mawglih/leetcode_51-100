/**
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
 * 
Example 1:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

Example 2:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

Example 3:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const n = board.length;
    const m = board[0].length;
    if(word.length < 1) return false;
    const helper = (i, j, pointer) => {
        if(i === n || i < 0 || j === m || j < 0 || board[i][j] !== word[pointer]) return false;
        if(pointer === word.length - 1) return true;
        board[i][j] = '.';
        const found = 
            helper(i + 1, j, pointer + 1) ||
            helper(i - 1, j, pointer + 1) ||
            helper(i, j + 1, pointer + 1) ||
            helper(i, j - 1, pointer + 1);
        board[i][j] = word[pointer];
        return found;
    }
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(word[0] === board[i][j]) {
                const match = helper(i, j, 0);
                if(match) return true;
            }
        }
    }
    return false;
};


const b = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]; 
const w = "SEE"
console.log(exist(b, w));

// runtime 617 ms
// memory 42.2 MB