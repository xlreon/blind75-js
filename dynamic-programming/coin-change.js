/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
    let dp = Array(amount+1).fill(Infinity)
    dp[0] = 0

    for(let currAmt = 1; currAmt <= amount; currAmt++) {
        for(let coin of coins) {
            if(currAmt-coin >= 0) {
                dp[currAmt] = Math.min(dp[currAmt], 1+dp[currAmt-coin])
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount]
};