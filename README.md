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

### Maximum Subarray - Medium

https://leetcode.com/problems/maximum-subarray/

> loop through array, check if curr max is max or current element+ that element is max if max add to max array and update global maximum

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0];
  let currMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currMax = Math.max(nums[i], currMax + nums[i]);
    max = Math.max(max, currMax);
  }
  return max;
};
```

### Product of Array Except Self - Medium

https://leetcode.com/problems/product-of-array-except-self/

> create a forward array and backward array and then multiply both, to optimise update the forward array to final array instead of having backward array

```javascript
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
```

### Container With Most Water - Medium

https://leetcode.com/problems/container-with-most-water/

> take left and right pointer, check min height between both and multiply by distance between left and right and store it to max area, check which height is smaller and accordingly update left + 1 and right - 1

```javascript
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
```

### Min in Rotated Sorted Array - Medium

https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

> binary search, start from left and right and mid pointers, check if mid is less than num right then move left to mid + 1 orelse move right to mid and repeat the process until left < right

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
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

### Spiral Matrix - Medium

https://leetcode.com/problems/spiral-matrix

> create top, left, right, bottom bounds, loop through top, right, bottom, left and update bounds

```javascript
var spiralOrder = function (matrix) {
  let top = 0;
  let left = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let res = [];
  let size = matrix.length * matrix[0].length;

  while (res.length < size) {
    for (let i = left; i <= right && res.length < size; i++) {
      res.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom && res.length < size; i++) {
      res.push(matrix[i][right]);
    }
    right--;
    for (let i = right; i >= left && res.length < size; i--) {
      res.push(matrix[bottom][i]);
    }
    bottom--;
    for (let i = bottom; i >= top && res.length < size; i--) {
      res.push(matrix[i][left]);
    }
    left++;
  }
  return res;
};
```

### Rotate Image Matrix - Medium

https://leetcode.com/problems/rotate-image/

> Transpose the matrix and swap the rows

```javascript
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // Transpose the matrix
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  // Reverse the rows
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix.length - 1 - j];
      matrix[i][matrix.length - 1 - j] = temp;
    }
  }
  return matrix;
};
```

## Dynamic Programming

### Climbing Stairs - Easy

https://leetcode.com/problems/climbing-stairs

> initialise 1st and 2nd step in dp 1 and dp 2, then just find dp i by adding dp i - 1 and dp i - 2, Similar to fibonacci in reverse

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let dp = [];
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
```

### Unique Paths - Medium

https://leetcode.com/problems/unique-paths/

> set first row and first column of m x n dp array with 1 since robot can only reach with 1 move to those locations. For rest of the cells the value will be the sum of top and left cells in the dp matrix. Return last cell of dp array

```javascript
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let dp = Array.from(Array(m), () => new Array(n));

  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};
```

## Linked List

### Linked List Cycle - Easy

https://leetcode.com/problems/linked-list-cycle/

> take 2 pointers fast and slow, if there is a cycle which only can be from the end of the list then fast and slow will meet and will be the same. In that case we can return true

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) return false;

  let fast = head;
  let slow = head;

  while (fast) {
    if (!fast.next) {
      return false;
    } else {
      fast = fast.next.next;
      slow = slow.next;
    }
    if (fast === slow) return true;
  }
  return false;
};
```

## Tree

### Kth Smallest Element in a BST - Medium

https://leetcode.com/problems/kth-smallest-element-in-a-bst

> do inorder traversal of BST and store in an array, return the element at kth index from the ans array

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let ans = [];
  inOrder(root, ans);
  return ans[k - 1];
};

function inOrder(root, ans) {
  if (!root) return;
  inOrder(root.left, ans);
  ans.push(root.val);
  inOrder(root.right, ans);
}
```

### Invert a Binary Tree - Easy

https://leetcode.com/problems/invert-binary-tree/

> just swap the left and right nodes recursively

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root) {
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  }
  return root;
};
```

### Lowest Common Ancestor - Medium

https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

> Check if both p and q are less then node update root to left of tree and if both p and q are right of the node move root to right, if p is less the node and q is greater then node then we have found the ans

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
};
```

## Strings

### Palindromic Substrings - Medium

https://leetcode.com/problems/palindromic-substrings/

> Take 2 pointers left and right, iterate over the string and update the left and right, inside that check until left and right are equal then move left more left and right more right until it is in bounds, increase the count and move the pointers, similarly have to do the same for odd numbers that is left is i and right is i + 1

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i;

    //odd
    helper(left, right);
    //even
    helper(left, right + 1);
  }
  function helper(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
  }
  return count;
};
```
