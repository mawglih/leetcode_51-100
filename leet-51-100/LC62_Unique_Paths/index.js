/**
 * There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time. Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner. The test cases are generated so that the answer will be less than or equal to 2 * 109.
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    function factorial (f) {
        if(f <= 1) return 1;
        return f * factorial(f - 1);
    }
    return factorial(m + n - 2) / (factorial(m - 1) * factorial(n - 1));
};

console.log(uniquePaths(3, 7));

// runtime 57 ms
// memory 43.4 mb