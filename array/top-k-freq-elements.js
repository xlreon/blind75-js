/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {};
    let bucket = [];
    let result = [];

    for(let num of nums) {
        if(!map[num]) map[num] = 1
        else map[num]++
    }

    for([num, freq] of Object.entries(map)) {
        if(!bucket[freq]) bucket[freq] = new Set().add(num)
        else bucket[freq] = bucket[freq].add(num)
    } 

    for(let i = bucket.length - 1; i >= 0; i--) {
        if(bucket[i]) result.push(...bucket[i])
        if(result.length === k) break;
    }

    return result;
};