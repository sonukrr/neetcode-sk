class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length == 0) return 0;
        if (nums.length == 1) return nums[0];

        const dp = new Array(nums.length).fill(0); // max profit made at upto ith house
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);

        for (let i = 2; i < nums.length; i++) {
            dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]); // profit at i depends on eighter we take or skip 
        }

        return dp[nums.length - 1];
    }
}
