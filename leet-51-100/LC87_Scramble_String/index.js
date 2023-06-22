/**
 * We can scramble a string s to get a string t using the following algorithm:
If the length of the string is 1, stop.
If the length of the string is > 1, do the following:
Split the string into two non-empty substrings at a random index, i.e., if the string is s, divide it to x and y where s = x + y.
Randomly decide to swap the two substrings or to keep them in the same order. i.e., after this step, s may become s = x + y or s = y + x.
Apply step 1 recursively on each of the two substrings x and y.
Given two strings s1 and s2 of the same length, return true if s2 is a scrambled string of s1, otherwise, return false.

Example 1:
Input: s1 = "great", s2 = "rgeat"
Output: true
Explanation: One possible scenario applied on s1 is:
"great" --> "gr/eat" // divide at random index.
"gr/eat" --> "gr/eat" // random decision is not to swap the two substrings and keep them in order.
"gr/eat" --> "g/r / e/at" // apply the same algorithm recursively on both substrings. divide at random index each of them.
"g/r / e/at" --> "r/g / e/at" // random decision was to swap the first substring and to keep the second substring in the same order.
"r/g / e/at" --> "r/g / e/ a/t" // again apply the algorithm recursively, divide "at" to "a/t".
"r/g / e/ a/t" --> "r/g / e/ a/t" // random decision is to keep both substrings in the same order.
The algorithm stops now, and the result string is "rgeat" which is s2.
As one possible scenario led s1 to be scrambled to s2, we return true.

Example 2:
Input: s1 = "abcde", s2 = "caebd"
Output: false

Example 3:
Input: s1 = "a", s2 = "a"
Output: true
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
    const isEqualChars = (word1, word2) => {
        if(word1.length !== word2.length) return false;
        const charMap = {};
        for(let i = 0; i < word1.length; i++) {
            const char1 = word1[i];
            const char2 = word2[i];
            charMap[char1] = char1 in charMap ? charMap[char1] + 1 : 1;
            charMap[char2] = char2 in charMap ? charMap[char2] - 1 : -1;
        }
        for(const char in charMap) {
            if(charMap[char] !== 0) return false;
        }
        return true;        
    };
        
    const isScrambleMemo = (str1, str2, memo = {}) => {
        const key = `${str1}-${str2}`;
        if(key in memo) return memo[key];
        if(str1 === str2) return true;
        if(!isEqualChars(str1, str2)) {
            memo[key] = false;
            return false;
        }
        const len = str1.length;
        for(let i = 1; i < len; i++) {
            if ((isScramble(str1.slice(0, i), str2.slice(0, i), memo) && isScramble(str1.slice(i), str2.slice(i), memo)) || (isScramble(str1.slice(0, i), str2.slice(len - i), memo) && isScramble(str1.slice(i), str2.slice(0, len - i), memo))) {
                memo[key] = true;
                return true;
            } 
        }
        memo[key] = false;
        return false;
    };
return isScrambleMemo(s1,s2,{});
}


console.log(isScramble('word', 'dwor'));

// runtime time exceeded

var isScramble2 = function(s1, s2) {
    return isScrambleMemo(s1, s2, {})
};

var isScrambleMemo = function(s1, s2, memo) {
    if (memo[s1 + s2] != undefined || memo[s2 + s1] != undefined) {
        return memo[s1 + s2];
    } else if (s1 == s2) {
        return true;
    } else if (s1.length != s2.length) {
        return false;
    } else if (s1.length <= 1) {
        return s1 == s2;
    }
    for (let i = 1; i < s1.length; i++) {
        if ((isScrambleMemo(s1.slice(0, i), s2.slice(0, i), memo) && isScrambleMemo(s1.slice(i), s2.slice(i), memo)) ||
            (isScrambleMemo(s1.slice(0, i), s2.slice(s1.length - i), memo) && isScrambleMemo(s1.slice(i), s2.slice(0, s1.length - i), memo))) {
            memo[s1 + s2] = true;
            return true;
        }
    }
    memo[s1 + s2] = false;
    return false;
};

// runtime 178 ms
// memory 52.2 MB