class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];
        nums.sort((a, b) => a - b);
        dfs(0, 0, []);
        return res;

        function dfs(start, currSum, subset){
            
            if(currSum == target){
                res.push([...subset]);
                return;
            }

            for(let i = start; i < nums.length; i++){
                if(currSum + nums[i] > target)
                    return;
                
                subset.push(nums[i]);
                dfs(i, currSum + nums[i], subset);
                subset.pop();
            }
        }

    }
}
