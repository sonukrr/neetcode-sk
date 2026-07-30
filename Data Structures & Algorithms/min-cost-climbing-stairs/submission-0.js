class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        if (cost.length == 0 || cost.length == 1) return 0;
        if (cost.length == 2) return Math.min(cost[0], cost[1]);

        let n = cost.length;
        const dp = new Array(n + 1).fill(0);
        dp[0] = cost[0];
        dp[1] = cost[1];
        for (let i = 2; i < cost.length; i++) {
            dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
        }

        return Math.min(dp[n - 1], dp[n - 2]);
    }
}
