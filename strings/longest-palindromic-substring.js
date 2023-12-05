/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    let largest = '';
    function isPalin(s, left, right) {
         while(left >=0 && right < s.length && s[left] === s[right]) {
             left--;
             right++;
         }
         return s.slice(left+1, right)
    }
 
     for(let i = 0; i < s.length; i++) {
         let oddPal = isPalin(s,i,i)
         let evenPal = isPalin(s,i, i+1)
 
         let currLargest = oddPal.length > evenPal.length ? oddPal : evenPal
         if(currLargest.length > largest.length) {
             largest = currLargest
         }
     }
     return largest
 };