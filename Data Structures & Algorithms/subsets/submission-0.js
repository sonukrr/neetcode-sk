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

            curr.push(nums[i]);

            dfs(i+1, curr);

            curr.pop();

            dfs(i + 1, curr);
            

        }
    }
}
