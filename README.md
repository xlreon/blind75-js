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

### 3Sum - Medium

https://leetcode.com/problems/3sum/

> take 3 pointer I is start j is I+1 and k is last, check for edge cases where I and I+1 element is equal the keep doing I++ similarly check for j and k ,if sum is < 0 then j++ or else do k--

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length === 0) return [];
  nums = nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        res.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k + 1]) k--;
        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return res;
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

### Search in Rotated Sorted Array - Medium

https://leetcode.com/problems/search-in-rotated-sorted-array

> take left and right pointers, find mid, check which side is sorted to do this check nums[right] is > nums[mid] if so check if the we want to change right or left according to if target > or < mid

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (nums[mid] === target) return mid;
    if (nums[right] > nums[mid]) {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      if (target < nums[mid] && target >= nums[left]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return -1;
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

### Merge Intervals - Medium

https://leetcode.com/problems/merge-intervals/

> sort the intevals by start time, take prev and curr, check if current[start] <= prev[end], if so then update prev[end] to max of current end or prev end orelse just push the current interval to result array and set prev to current.

```javascript
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let start = 0;
  let end = 1;

  intervals = intervals.sort((a, b) => a[start] - b[start]);
  let prev = intervals[0];
  let res = [prev];

  for (let current of intervals) {
    if (current[start] <= prev[end]) {
      prev[end] = Math.max(current[end], prev[end]);
    } else {
      res.push(current);
      prev = current;
    }
  }

  return res;
};
```

### Combination Sum - Medium

https://leetcode.com/problems/combination-sum/description/

> use recursion to solve, create dfs function check edge cases if target is 0 then add the res to result arr orelse loop through the candidates array and for each step call the dfs function and subtract the current value from target

```javascript
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = [];

  function dfs(index, current, arr) {
    if (current < 0) return;
    if (current === 0) res.push([...arr]);

    for (let i = index; i < candidates.length; i++) {
      arr.push(candidates[i]);
      dfs(i, current - candidates[i], arr);
      arr.pop();
    }
  }
  dfs(0, target, []);
  return res;
};
```

### Insert Intervals - Medium

https://leetcode.com/problems/insert-interval/

> First check if the current intervals end is less than the start of newInterval if yes then add to result array and move pointer, now check if start of current is less than end of new, if yes then take min, max of both intervals and increase the pointer to next and after that add the updated newInterval, finally for the remaining elements add it to the result and return result

```javascript
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let res = [];
  let i = 0;
  const start = 0;
  const end = 1;

  while (i < intervals.length && intervals[i][end] < newInterval[start]) {
    res.push(intervals[i]);
    i++;
  }

  while (i < intervals.length && intervals[i][start] <= newInterval[end]) {
    newInterval[start] = Math.min(intervals[i][start], newInterval[start]);
    newInterval[end] = Math.max(intervals[i][end], newInterval[end]);
    i++;
  }

  res.push(newInterval);

  while (i < intervals.length) {
    res.push(intervals[i]);
    i++;
  }

  return res;
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

### Word Search - Medium

https://leetcode.com/problems/word-search/description/

> find the first letter of the word in the board then recursively search left, right, top down from that cell until you find the entire word, when you visit a letter in the board replace it with # so that you can mark it as visited and avoid traversing back to that letter

```javascript
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (board[r][c] === word[0] && dfs(r, c, 0)) return true;
    }
  }
  return false;
  function dfs(r, c, i) {
    if (word.length === i) return true;
    if (
      r < 0 ||
      c < 0 ||
      r >= board.length ||
      c >= board[0].length ||
      board[r][c] !== word[i]
    )
      return false;

    board[r][c] = "#";
    if (
      dfs(r + 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c - 1, i + 1)
    )
      return true;
    board[r][c] = word[i];
  }
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

### Word Search II - Hard

https://leetcode.com/problems/word-search-ii/description/

> Buld a Trie out of the given search words, assign the entire word for the end node character of each word, dfs through the matrix and check if you have found the word in the trie, if so add it to the result array and set the current Trie word end node to null to avoid duplicate searches in matrix for the same word, check inbounds and dfs through up, down, left, right elements while assigning '#' to visited letters and after dfs replace the '#' with original character in the matrix. return the result array

```javascript
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  let root = buildTrie(words);
  let result = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs(root, i, j, result, board);
    }
  }
  return result;
};

function dfs(node, i, j, result, board) {
  if (node.word) {
    result.push(node.word);
    node.word = null;
  }
  if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) return;
  if (!node[board[i][j]]) return;

  const c = board[i][j];
  board[i][j] = "#";
  dfs(node[c], i + 1, j, result, board);
  dfs(node[c], i - 1, j, result, board);
  dfs(node[c], i, j + 1, result, board);
  dfs(node[c], i, j - 1, result, board);
  board[i][j] = c;
}

function buildTrie(words) {
  let root = {};

  for (let word of words) {
    let currNode = root;
    for (let c of word) {
      if (!currNode[c]) currNode[c] = {};
      currNode = currNode[c];
    }
    currNode.word = word;
  }
  return root;
}
```

## Dynamic Programming

### Longest Common Subsequence - Medium

https://leetcode.com/problems/longest-common-subsequence/description/

> Take a dp array, initialise the dp matrix with 0, if text[i-1] === text[j-1] is same then take the left diagonal element and add 1 to it orelse take the max of upper and left cells, finally return the last cell of the dp array

```javascript
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  let m = text1.length;
  let n = text2.length;
  let dp = Array.from(Array(m + 1), () => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }
  return dp[m][n];
};
```

### Jump Game - Medium

https://leetcode.com/problems/jump-game/description/

> iterate from the last and check if i + element is greater than target (length of array) then we can reach the specific index so new target is i, if the target is 0 then we return true or false';

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let target = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= target) target = i;
  }
  return target === 0;
};
```

### House Robber - Medium

https://leetcode.com/problems/house-robber/description/

> if empty array return 0 or if 1 element return element or else take a dp array and take assign 0 index to first element and 1 index to max of 1&2 elements, iterste from 2 to length of array and add the element to dp array which is max of either i-2 + I element or i-1, finally return the last element of dp array.

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let dp = Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }

  return dp[dp.length - 1];
};
```

### Coin Change - Medium

https://leetcode.com/problems/coin-change/description/

> take dp array with size as amount, loop the dp and for each iteration loop through the coins array and check if coins exists then add 1 or else take min(dp[currnamt], 1+dp[curramt-coin])

```javascript
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let currAmt = 1; currAmt <= amount; currAmt++) {
    for (let coin of coins) {
      if (currAmt - coin >= 0) {
        dp[currAmt] = Math.min(dp[currAmt], 1 + dp[currAmt - coin]);
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
};
```

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

### Reverse Linked List - Easy

https://leetcode.com/problems/reverse-linked-list/description/

> Take 2 pointers, prev and next, check if head is not null then update nextNode to be head.next then update head.next to be prev and then move prev to head then update head to nextNode

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  while (head) {
    let nextNode = head.next;
    head.next = prev;
    prev = head;
    head = nextNode;
  }
  return prev;
};
```

### Merge Two Sorted Lists - Medium

https://leetcode.com/problems/merge-two-sorted-lists/description/

> Create a dummy node and point head to it, check if list1 and list2 are non empty then iterate and check which value is less accordingly assign list1 or list2 to dummy, finally check which list is non empty and append it to end of dummy, return head.next

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(0);
  let head = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      dummy.next = list1;
      list1 = list1.next;
    } else {
      dummy.next = list2;
      list2 = list2.next;
    }
    dummy = dummy.next;
  }

  if (list1) {
    dummy.next = list1;
  } else {
    dummy.next = list2;
  }

  return head.next;
};
```

### Merge K sorted Lists - Hard

https://leetcode.com/problems/merge-k-sorted-lists/description/

> Take pair of list merge it and push it back to lists array, use merge two list function to merge the pair and return the merged lists

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) return null;

  while (lists.length > 1) {
    let list1 = lists.shift();
    let list2 = lists.shift();

    let merged = mergeLists(list1, list2);

    lists.push(merged);
  }

  return lists[0];
};

function mergeLists(l1, l2) {
  let dummy = new ListNode(0);
  let head = dummy;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      dummy.next = l1;
      l1 = l1.next;
    } else {
      dummy.next = l2;
      l2 = l2.next;
    }
    dummy = dummy.next;
  }

  if (l1 === null) {
    dummy.next = l2;
  } else {
    dummy.next = l1;
  }

  return head.next;
}
```

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

### Remove Nth Node From End of List - Medium

https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

> Take 3 pointers, dummy, left and right, move right for n times then shift right and left till right is at the end of list, finally just assign left.next to left.next.next to delete the node at nth place from last in linked list

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let left = dummy;
  let right = head;

  while (right && n > 0) {
    right = right.next;
    n -= 1;
  }

  while (right) {
    left = left.next;
    right = right.next;
  }

  left.next = left.next.next;
  return dummy.next;
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

### Same Tree - Easy

https://leetcode.com/problems/same-tree

> check if p and q is null return true, if p and q not equal return false, if both p.val === q.val check recursive for p.left and q.left and p.right and q.right otherwise return false.

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val === q.val)
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  return false;
};
```

### Valid Binary Search Tree - Medium

https://leetcode.com/problems/validate-binary-search-tree/description/

> check if root is null return true, check if root < left or root > right return false, recurse with left updating max and recurse with right updating minimum

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
 * @return {boolean}
 */
var isValidBST = function (root) {
  function helper(root, min, max) {
    if (root === null) return true;
    if (root.val <= min || root.val >= max) return false;
    return (
      helper(root.left, min, root.val) && helper(root.right, root.val, max)
    );
  }
  return helper(root, -Infinity, Infinity);
};
```

### Max Depth Binary Tree - Easy

https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

> if rootnull return 0 is base case, or return 1 + Max of either left or right subtree

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
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
```

### Level Order Traversal - Medium

https://leetcode.com/problems/binary-tree-level-order-traversal/

> do bfs and for every level keep adding the children to level arr and add the level array to result

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let res = [];
  while (queue.length) {
    let levelNodes = [];
    let levelLen = queue.length;
    while (levelLen) {
      let current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      levelNodes.push(current.val);
      levelLen--;
    }
    res.push(levelNodes);
  }
  return res;
};
```

### Lowest Common Ancestor - Medium

https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
/

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

### Implement Trie (Prefix Tree) - Medium

https://leetcode.com/problems/implement-trie-prefix-tree/description/

> Code is enough

```javascript
var Trie = function () {
  this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root;
  for (let ch of word) {
    if (!node[ch]) node[ch] = {};
    node = node[ch];
  }
  node.isWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.traverse = function (word) {
  let node = this.root;
  for (let ch of word) {
    node = node[ch];
    if (!node) return null;
  }
  return node;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.traverse(word);
  return node !== null && node.isWord === true;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  const node = this.traverse(prefix);
  return node !== null;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
```

## Strings

### Minimum Window Substring - Hard

https://leetcode.com/problems/minimum-window-substring/description/

> take t and create a freqMap from it, take 2 pointers left and right, iterate over the string and check if the right letter is in the freqMap then decrease the freq of that letter and check if freq is 0 then decrease count by 1, increase right by 1, loop until count is zero and check if right-left is greater then minLen then update minString orelse update the left pointer by checking if left is in freqMap then increase letter freq by 1 and if now the letter count is > 0 then increase count by 1, increase left pinter by 1

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let map = new Map();

  for (let letter of t) {
    if (map.has(letter)) {
      map.set(letter, map.get(letter) + 1);
    } else {
      map.set(letter, 1);
    }
  }

  let left = 0;
  let right = 0;
  let count = map.size;
  let len = Infinity;
  let minWindow = "";

  while (right < s.length) {
    let rLetter = s[right];
    if (map.has(rLetter)) {
      map.set(rLetter, map.get(rLetter) - 1);
      if (map.get(rLetter) === 0) count--;
    }
    right++;

    while (count === 0) {
      if (right - left < len) {
        len = right - left;
        minWindow = s.slice(left, right);
      }

      let lLetter = s[left];
      if (map.has(lLetter)) {
        map.set(lLetter, map.get(lLetter) + 1);
        if (map.get(lLetter) > 0) count++;
      }
      left++;
    }
  }
  return minWindow;
};
```

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

### Longest Substring without repeating charactersPalindromic Substrings - Medium

https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

> Take a set and left, and right pointers, check if right is not in set add to set and find the size of set which has the longest string, if set does already has the character remove the character from the set and increase left by 1. Do this until right is less than string length

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longest = 0;
  let left = 0;
  let right = 0;
  let set = new Set();

  while (right < s.length) {
    const letter = s[right];
    if (!set.has(letter)) {
      set.add(letter);
      longest = Math.max(set.size, longest);
      right++;
    } else {
      set.delete(s[left]);
      left++;
    }
  }
  return longest;
};
```

### Group Anagrams - Medium

https://leetcode.com/problems/group-anagrams

> create a map, sort every string and add to map, for every string check it's equivalent sorted thing in map and add it to the values

```javascript
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = {};
  for (let i = 0; i < strs.length; i++) {
    let currentKey = strs[i].split("").sort().join("");
    if (!map[currentKey]) {
      map[currentKey] = [strs[i]];
    } else {
      map[currentKey] = [...map[currentKey], strs[i]];
    }
  }
  return Object.values(map);
};
```

### Longest Consecutive Sequence - Medium

https://leetcode.com/problems/longest-consecutive-sequence/

> Initialise a set with given nums array, iterate over the set and check if current number - 1 is there in the set to check if its a start of new sequence or not, if its a new sequence increament streak and increment num, finally find the longest of current streak and overall streak and return it.

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let set = new Set(nums);
  let streak = 0;
  for (let num of set) {
    if (set.has(num - 1)) continue;
    let currentStreak = 1;
    while (set.has(num + 1)) {
      currentStreak++;
      num++;
    }
    streak = Math.max(streak, currentStreak);
  }
  return streak;
};
```

### Longest Palindromic Substring - Medium

https://leetcode.com/problems/longest-palindromic-substring/description/

> define a palin function, check if left and right are equal then decrease left and increase right unless left and right are in bounds, do this for odd string where left==right and evenStrings where left = i and right = i +1, find which is longest and return it

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let largest = "";
  function isPalin(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  }

  for (let i = 0; i < s.length; i++) {
    let oddPal = isPalin(s, i, i);
    let evenPal = isPalin(s, i, i + 1);

    let currLargest = oddPal.length > evenPal.length ? oddPal : evenPal;
    if (currLargest.length > largest.length) {
      largest = currLargest;
    }
  }
  return largest;
};
```

## Graphs

### Clone Graph - Medium

https://leetcode.com/problems/clone-graph/description/

> Create a dfs function and visited object, iterate over each node and add it to visited add and recursively call the dfs for each neighbors and return the root

```javascript
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  let visited = {};
  function dfs(node) {
    if (!node) return node;
    if (visited[node.val]) return visited[node.val];

    let root = new Node(node.val);
    visited[node.val] = root;

    for (let neighbor of node.neighbors) {
      root.neighbors.push(dfs(neighbor));
    }

    return root;
  }

  return dfs(node);
};
```
