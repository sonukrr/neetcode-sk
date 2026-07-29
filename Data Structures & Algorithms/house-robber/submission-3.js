class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
            
    return dfs(0);

    function dfs(i, memo = {}){
        if(i >= nums.length) return 0;

        if(memo[i] != undefined) return memo[i];

        let res =  Math.max(nums[i] + dfs(i + 2, memo), dfs(i + 1, memo));

        memo[i] = res;

        return res;
    }
    }
}
