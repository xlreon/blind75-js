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
