class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = [];
        dfs([], new Array(nums.length).fill(false));
        return res;


        function dfs(perm, pick){
            if(perm.length == nums.length){
                res.push([...perm]);
                return;
            }


            for(let i = 0; i < nums.length; i++){
                if(!pick[i]){
                    perm.push(nums[i]);
                    pick[i] = true;

                    dfs(perm, pick);

                    perm.pop();
                    pick[i] = false;
                }
            }
        }
    }
}
