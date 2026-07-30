class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(houses) {
        if (houses.length == 1) return houses[0];

        return Math.max(dfs(0, true, new Array(houses.length + 1).fill(-1)), dfs(1, false, new Array(houses.length + 1).fill(-1)));

        function dfs(i, isFirstRobbed = false, memo) {
            if (i >= houses.length) return 0;
            if (i == houses.length - 1 && isFirstRobbed) return 0;
            if (memo[i] >= 0) return memo[i];

            let res = Math.max(houses[i] + dfs(i + 2, isFirstRobbed, memo), dfs(i + 1, isFirstRobbed, memo));
            memo[i] = res;
            return res;
        }
    }
}
