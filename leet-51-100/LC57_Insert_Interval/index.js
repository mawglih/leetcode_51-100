/**
 * You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval. 
Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
Return intervals after the insertion.
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if(intervals.length < 1) return [newInterval];
    intervals.push(newInterval);
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [intervals[0]];
    for ([s, e] of intervals) {
        const prevE = result.at(-1)[1];
        if(s <= prevE) {
            result.at(-1)[1] = Math.max(e, prevE);
        } else {
            result.push([s, e]);
        }
    }
    return result;
};

const a = [[1,2],[3,5],[6,7],[8,10], [12,16]]; 
const b = [4,8];
// Output: [[1,5],[6,9]]
console.log(insert(a, b));

//73ms
//45 MB