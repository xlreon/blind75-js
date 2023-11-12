/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxima = 0;
  while (left < right) {
    if (height[left] <= height[right]) {
      let area = height[left] * (right - left);
      maxima = Math.max(maxima, area);
      left++;
    } else {
      let area = height[right] * (right - left);
      maxima = Math.max(maxima, area);
      right--;
    }
  }
  return maxima;
};
