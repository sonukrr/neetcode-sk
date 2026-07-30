class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const memo = Array(cost.length).fill(-1);
        return Math.min(dfs(0), dfs(1));

        function dfs(i) {
            if (i >= cost.length) return 0;
            if (memo[i] >= 0) return memo[i];

            let res = cost[i] + Math.min(dfs(i + 1), dfs(i + 2));
            memo[i] = res;
            return res;
        }
    }
}
