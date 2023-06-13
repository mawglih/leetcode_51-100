/**
 * Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2. You have the following three operations permitted on a word:

Insert a character
Delete a character
Replace a character
 
Example 1:
Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')

Example 2:
Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  let count = 0;
  for(let i = 0; i < word1.length; i++) {
    if(!word2.includes(word1[i])) {
      console.log('char1', word1[i]);
      count++;
  }
}
  for(let i = 0; i < word2.length; i++) {
    if (!word1.includes(word2[i])) {
      count++;
      console.log('char2', word2[i]);
    }
  }
  return count;
};

console.log(minDistance('pose', 'rose'));