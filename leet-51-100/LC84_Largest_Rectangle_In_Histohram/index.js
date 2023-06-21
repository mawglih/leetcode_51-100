/**
 * Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

Example 1:
Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.

Example 2:
Input: heights = [2,4]
Output: 4
 */

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea2 = function(heights) {
    let minLeft = 0;
    let minRight = heights.length - 1;
    let mid = Math.floor((minLeft + minRight / 2));
    for(let i = 1; i < mid; i ++) {
        if(heights[i] < heights[minLeft]) minLeft = i;
    } 
    for (let i = heights.length - 2; i >= mid; i--) {
        if(heights[i] < heights[minRight]) minRight = i;
    }
    console.log('mins', minLeft, minRight);
    console.log('val', heights[minLeft], heights[minRight]);
    let maxArea = Math.min(heights[minLeft], heights[minRight]) * (minRight - minLeft + 1);
    console.log('max1', maxArea);
    while(minLeft <= minRight) {
        let curMax = Math.min(heights[minLeft], heights[minRight]) * (minRight - minLeft + 1);
        console.log('cur1', curMax);
        if(curMax >= maxArea) {
            maxArea = curMax;
            console.log('max2', maxArea);
            minLeft++;
            console.log('mins', minLeft, minRight);
            console.log('val2', heights[minLeft], heights[minRight]);
        } else {
            minRight--;
            console.log('max3', maxArea);
            console.log('mins', minLeft, minRight);
            console.log('val3', heights[minLeft], heights[minRight]);
        }
    }
    return maxArea;
};



var largestRectangleArea = function(heights) {
    heights.push(0);
    let stack = [];
    let area = 0;
    for(var i=0; i<heights.length; i++) {
        let start = i;
        while(stack.length && stack[stack.length - 1][1] > heights[i]) {
            let [pos, height] = stack.pop();
            area = Math.max(area, (i - pos) * height);
            start = pos;
        }
        stack.push([start, heights[i]]);
    }
    return area;
};

const arr = [2,1,5,6,2,3];
console.log(largestRectangleArea(arr));

// runtime 130 ms
// memory 74,5 MB