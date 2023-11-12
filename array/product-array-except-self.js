/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let forward = [];
  let start1 = 1;
  let backward = [];
  let start2 = 1;
  for (let i = 0; i < nums.length; i++) {
    forward.push(start1);
    start1 = start1 * nums[i];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    backward.unshift(start2);
    start2 = start2 * nums[i];
  }
  return forward.map((ele, i) => ele * backward[i]);
};
