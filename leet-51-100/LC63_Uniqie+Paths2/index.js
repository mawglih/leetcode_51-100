/**
 * You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time. An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle. Return the number of possible unique paths that the robot can take to reach the bottom-right corner. The testcases are generated so that the answer will be less than or equal to 2 * 10^9.
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let dp = Array(m + 1);
    for (let i = 0; i <= m; i++) {
        dp[i] = Array(n + 1).fill(0);
    }
    dp[1][0] = 1;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (grid[i-1][j-1]) continue;
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    return dp[m][n];
};

//runtime 54 ms
// memory 42.4 MB
const obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]];
console.log(uniquePathsWithObstacles(obstacleGrid));