class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];
        dfs(0, 0, []);
        return res;

        function dfs(i, currSum, subset) {

            if (currSum > target || i >= nums.length)
                return;

            if (currSum == target) {
                res.push([...subset]);
                return;
            }

            currSum += nums[i];

            subset.push(nums[i]);
            dfs(i, currSum, subset);
            
            subset.pop();
            currSum -= nums[i];
            dfs(i + 1, currSum, subset);



        }
    }
}
