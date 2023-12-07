/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let res = []
    let i = 0
    const start = 0
    const end = 1
 
     while(i < intervals.length && intervals[i][end] < newInterval[start]) {
         res.push(intervals[i])
         i++
     }
 
     while(i < intervals.length && intervals[i][start] <= newInterval[end]) {
         newInterval[start] = Math.min(intervals[i][start], newInterval[start])
         newInterval[end] = Math.max(intervals[i][end], newInterval[end])
         i++
     }
 
     res.push(newInterval)
     
     while(i < intervals.length) {
         res.push(intervals[i])
         i++
     }
 
     return res
 };