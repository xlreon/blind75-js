/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Number.MAX_SAFE_INTEGER
    let maxProfit = 0;
    for(let i = 0; i < prices.length; i++) {
        const curr = prices[i];
        const profit = curr - min;
        min = Math.min(curr, min)
        maxProfit = Math.max(profit, maxProfit)
    } 
    return maxProfit;
};
