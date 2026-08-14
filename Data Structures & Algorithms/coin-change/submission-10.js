class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const dp = Array(amount + 1).fill(Infinity);
        dp[0] = 0;

        for (let i = 1; i <= amount; i++) {
            for (let coin of coins) {
                let remainingAmt = i - coin;
                if (remainingAmt >= 0) {
                    dp[i] = Math.min(dp[i], 1 + dp[remainingAmt]);
                }
            }
        }
        
        return dp[amount] == Infinity ? -1 : dp[amount];
    }
}
