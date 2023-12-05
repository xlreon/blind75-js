/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    let map = new Map()
 
    for(let letter of t) {
        if(map.has(letter)) {
            map.set(letter, map.get(letter)+1)
        } else {
            map.set(letter, 1)
        }
    }
 
    let left = 0;
    let right = 0;
    let count = map.size;
    let len = Infinity
    let minWindow = ''
 
    while(right < s.length) {
        let rLetter = s[right]
        if(map.has(rLetter)) {
            map.set(rLetter, map.get(rLetter)-1)
            if(map.get(rLetter) === 0) count--;
        }
         right++
 
        while(count === 0) {
            if(right - left < len) {
                len = right - left
                minWindow = s.slice(left, right)
            }
 
            let lLetter = s[left]
            if(map.has(lLetter)) {
                map.set(lLetter, map.get(lLetter) + 1)
                if(map.get(lLetter) > 0) count++
            }
            left++
        }
    }
    return minWindow
 };