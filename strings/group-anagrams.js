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
