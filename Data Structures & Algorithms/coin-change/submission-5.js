class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        // 1- d recursion // top down approach
        // a bigger problem to be broken down into smaller sub problems

        // intuition : we pick the current max we can pick , and then ask the same question for the remaining amount . exploring all paths and return the shortest path

        let minCoins = Infinity;
        const memo = {};

        minCoins = dfs(amount);
        return minCoins == Infinity ? -1 : minCoins;

        function dfs(amt){
            if(amt == 0) return 0;

            if(memo[amt] != undefined) return memo[amt];

            let res = Infinity;
            for(const coin of coins){
                if(amt - coin >= 0)
                    res = Math.min(res, 1 + dfs(amt - coin));
                
            }

            memo[amt] = res;
            
            return res;
        }


    }
}
