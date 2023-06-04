/***
 * Given a string s consisting of words and spaces, return the length of the last word in the string. A word is a maximal substring consisting of non-space characters only.
 */

/**
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let res = s.trimEnd().split(' ');
    return res[res.length-1].length;
};

console.log(lengthOfLastWord(words));

// 65ms
// memory 42.7 MB