/**
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
 * 
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length <= 1) return intervals;
    intervals.sort((a, b) => a[0] - b[0]);
    const newIntervals = [intervals[0]];
    for ([s, e] of intervals) {
        const prevE = newIntervals.at(-1)[1];
        if(s <= prevE) {
            newIntervals.at(-1)[1] = Math.max(e, prevE);
        } else {
            newIntervals.push([s, e]);
        }
    }
    return newIntervals;
        
};

const intervals = [[1,3],[2,6],[8,10],[15,18]];
console.log(merge(intervals));

//109 ms
// memory 51.8
