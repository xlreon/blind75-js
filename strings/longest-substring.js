/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
   let longest = 0
   let left = 0
   let right = 0
   let set = new Set()

   while(right < s.length) {
       const letter = s[right]
       if(!set.has(letter)) {
           set.add(letter)
           longest = Math.max(set.size, longest)
           right++
       } else {
           set.delete(s[left])
           left++
       }
   }
   return longest
};