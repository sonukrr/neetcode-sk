class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(houses) {
        if (houses.length == 0) return 0;
        if (houses.length == 1) return houses[0];

        return Math.max(helper(houses.slice(1)), helper(houses.slice(0, -1)));

        function helper(nums) {
            if(nums.length == 1) return nums[0];
            
            const dp = new Array(nums.length).fill(0);

            dp[0] = nums[0];
            dp[1] = Math.max(nums[0], nums[1]);
            for (let i = 2; i < nums.length; i++) {
                dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
            }

            return dp[dp.length - 1];
        }
    }
}
