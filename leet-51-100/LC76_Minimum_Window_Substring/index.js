/**
 * Given two strings s and t of lengths m and n respectively, return the minimum window substring  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "". The testcases will be generated such that the answer is unique.

Example 1:
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

Example 2:
Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.

Example 3:
Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(s.length < t.length) return '';
    if(s === t) return s;
    let start = 0; 
    let minLength = s.length + 1; 
    let matches = 0;
    let substrStart=0;
    let charMap = {};
    for(let char of t) {
        charMap[char] = (charMap[char] || 0) + 1;
    }
    
    for(let end = 0; end < s.length; end++) {
        let right = s[end];
        if(right in charMap) {
            charMap[right]--;
            if(charMap[right] >= 0) matches++;
        }
    
        while(matches === t.length) {
            if (minLength > end - start + 1) {
                minLength = end - start + 1;
                substrStart = start;
            }
            let left = s[start];
            start++;
            if(left in charMap) {
                if(charMap[left] === 0) matches--;
                charMap[left]++;
            }
        }
    }
    if(minLength > s.length) return '';
    return s.substring(substrStart, minLength + substrStart);
};

console.log(minWindow('abcdasdda', 'adca'));

// runtime 86 ms
// memory 43 MB