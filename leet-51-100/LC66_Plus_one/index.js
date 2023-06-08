/**
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's. Increment the large integer by one and return the resulting array of digits.
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(let i = digits.length - 1; i >= 0; i--) {
        let addOn = 0;
        if(digits[i] + 1 < 10) {
            digits[i] += 1;
            return digits;
        } else {
            digits[i] = digits[i] + addOn + 1;
            addOn = 1;
            digits[i] = digits[i] % 10;
            if(i === 0) digits.unshift(addOn);
        }
    }
    return digits;
};

console.log(plusOne([9]));

// runtime 62 ms
// memory 41.9 MB