class Solution {
    climbStairs(n) {
        const memo = new Array(n + 1).fill(-1);

        function dfs(curr) {
            if (curr === n) return 1;
            if (curr > n) return 0;

            if (memo[curr] !== -1) return memo[curr];

            memo[curr] = dfs(curr + 1) + dfs(curr + 2);
            return memo[curr];
        }

        return dfs(0);
    }
}