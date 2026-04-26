class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const res = [];
        nums.sort((a, b) => a - b); // sort to avoid duplicates pick at same level
        dfs(0, []);
        return res;

        function dfs(i, curr){
            if(i >= nums.length){
                res.push([...curr]);
                return;
            }

            // pick i
            curr.push(nums[i]);
            dfs(i + 1, curr);
            curr.pop();

            // skip i if duplicates
            while(i + 1 < nums.length && nums[i] == nums[i + 1]){
                i++;
            }

            dfs(i + 1, curr);
        }
    }
}
