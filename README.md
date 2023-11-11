# blind75-js

## Array

### Two Sum - Easy

https://leetcode.com/problems/two-sum/

> use map, store all element as key and index as value, check if diff in map, return current and stored diff index.

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    let diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    } else {
      map.set(curr, i);
    }
  }
};
```

### Buy Sell Stocks - Easy

https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

> find current min, if new element is new min then update the min else update max profit but subtracting current and min element previously found, return max profit

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = Number.MAX_SAFE_INTEGER;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    const curr = prices[i];
    const profit = curr - min;
    min = Math.min(curr, min);
    maxProfit = Math.max(profit, maxProfit);
  }
  return maxProfit;
};
```

### Contains Duplicate - Easy

https://leetcode.com/problems/contains-duplicate/

> create a new set from array, check if set length and array length same return true or else return false

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (set.has(num)) {
      return true;
    } else {
      set.add(num);
    }
  }
  return false;
};
```

## Matrix

### Set Matrix Zeroes - Medium

https://leetcode.com/problems/set-matrix-zeroes/

> find all the position of zeros in the matrix, iterate over the positions and set row and col to zeros

```javascript
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let pos = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        pos.push([i, j]);
      }
    }
  }

  for (let i = 0; i < pos.length; i++) {
    const [row, col] = pos[i];
    for (let j = 0; j < matrix.length; j++) {
      matrix[j][col] = 0;
    }
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[row][j] = 0;
    }
  }
  return matrix;
};
```
