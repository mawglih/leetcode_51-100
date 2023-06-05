/**
 * The set [1, 2, 3, ..., n] contains a total of n! unique permutations.
By listing and labeling all of the permutations in order, we get the following sequence for n = 3:
"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation2 = function(n, k) {
    
};



var getPermutation2 = function(n, k) {
    const numbers = new Array(n).fill().map((_, idx) => idx + 1);
    let factorials = new Array(n - 1);
    factorials[0] = 1;
    let factorial =  1;
    for (let i = 1; i < n; i++) {
        factorials[i] = (factorial *= i)
    }
    let result = ''
    let nextCombinationIndex = k - 1;
    console.log('factorials', factorials);
    console.log('nextCombinationIndex1', nextCombinationIndex);
    
    for (let i = 1; i <= n; i++) {
        const nextCombinationsPerNumber = factorials[n - i];
        console.log('nextCombinationsPerNumber', nextCombinationsPerNumber);
        const nextNumberIndex = Math.floor(nextCombinationIndex / nextCombinationsPerNumber) ;
        console.log('nextNumberIndex', nextNumberIndex);
        result += numbers.splice(nextNumberIndex, 1)[0];
        console.log('result', result);
        nextCombinationIndex = nextCombinationIndex % nextCombinationsPerNumber;
        console.log('nextCombinationIndex2', nextCombinationIndex);
    }
    return result;
}

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let factorial = [1];
    for (let i=1;i<n;i++) factorial[i]= i * factorial[i-1];
    let range = Array.from({length: n}, (_, i) => i+1);

    let res = "";
    for (let i = n; i > 0; i--) {
        let index = Math.ceil(k / factorial[i - 1]);
        res+=range[index - 1];
        range.splice(index - 1, 1);
        k -= (factorial[i-1] * (index - 1));
    }
    return res;
};

console.log(getPermutation(5,20));

// runtime 58 ms
// memory 42.2 MB