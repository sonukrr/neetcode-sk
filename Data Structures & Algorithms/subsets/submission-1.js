class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];
        dfs(0, []);
        return res;

        function dfs(i, curr){
            if(i >= nums.length){
                res.push([...curr]);
                return;
            }

            // at each step we have two desicion ->
            // either to include the curr or exclude the curr

            // include nums[i]
            curr.push(nums[i]);
            dfs(i+1, curr);

            // exclude nums[i]
            curr.pop();
            dfs(i + 1, curr);
            

        }
    }
}
