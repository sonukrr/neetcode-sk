class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = [];
        dfs(new Set());
        return res;

        function dfs(set){
            // height of decision tree
            if(set.size == nums.length){
                res.push([...set]);
                return;
            }


            //branch out from each element
            for(let i = 0; i < nums.length; i++){
                const num = nums[i];

                // element is already picked for current path
                if(set.has(num)){
                    continue;
                }
                    

                // new element. pick and explore further
                set.add(num);
                dfs(set);
                set.delete(num); // undo the selection to explore diferent path now

            }
        }
    }
}
