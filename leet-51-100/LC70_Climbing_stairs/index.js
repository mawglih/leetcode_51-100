/**
 * You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 */

/**

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let arr = [1,2];
    if(n <= 2) return n;
    for(let i = 2; i < n; i++){
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n-1];
};

console.log(climbStairs(5));

// runtime 54 ms
// memory 41.9 MB