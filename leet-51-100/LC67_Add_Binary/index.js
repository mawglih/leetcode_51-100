/**
 * Given two binary strings a and b, return their sum as a binary string.
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let arrA = a.split('');
    let arrB = b.split('');
    let lengthDiff = arrA.length - arrB.length;
    if(lengthDiff > 0) {
        arrB = addZeroes(arrB, lengthDiff);
    } else if(lengthDiff < 0){
        arrA = addZeroes(arrA, Math.abs(lengthDiff));
    } 
    return addArraysB(arrA, arrB).join('').toString();
    
};

function addArraysB(a, b) {
    let result = [];
    let addOn = '';
    for(let i = a.length - 1; i >=0; i--) {
        if(a[i] == '1' && b[i] == '1') {
            addOn == '1' ? result.unshift('1') : result.unshift('0');
            addOn = '1';
            if(i === 0) {
                result.unshift(addOn);
            }
        } else if(a[i] == '1' || b[i] == '1'){
            if(addOn == '1') {
                result.unshift('0');
                addOn = '1';
                if(i === 0) {
                    result.unshift(addOn);
                }
            } else {
                result.unshift('1');
                addOn = '';
            }
        } else {
            addOn == '1' ? result.unshift('1') : result.unshift('0');
            addOn = '';
        }
    }
    return result;
};

function addZeroes(a, diff) {
    const zeroes = Array(diff).fill('0');
    return [...zeroes, ...a];
}

const a = "11";
const b = "1";
console.log(addBinary(a, b));

// runtime 61 ms
// memory 44.3 MB