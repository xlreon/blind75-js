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
var levelOrder = function(root) {
    if(!root) return []
   let queue = [root]; 
    let res = [];
   while(queue.length) {
       let levelNodes = [];
       let levelLen = queue.length
       while(levelLen) {
        let current = queue.shift()
        if(current.left) queue.push(current.left)
        if(current.right) queue.push(current.right)
        levelNodes.push(current.val)
        levelLen--
       }
        res.push(levelNodes)
   }
   return res;
};