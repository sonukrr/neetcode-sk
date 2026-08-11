class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        if(amount == 0) return 0;
        
        const dp = Array.from({length: amount + 1}).fill(Infinity); // min amount of coins needed to make up amount

        dp[0] = 0;

        for(let i = 1; i <= amount; i++){
            for(const coin of coins){
                if(coin <= i){
                    dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
                }
                
            }
        }

        console.log(dp);

        return dp[amount] == Infinity ? -1 : dp[amount];
    }
}
