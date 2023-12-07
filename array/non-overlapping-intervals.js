/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  let count = 0;
  let prev = 0;

  intervals = intervals.sort((a, b) => a[1] - b[1]);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[prev][1]) {
      count++;
    } else {
      prev = i;
    }
  }
  return count;
};
