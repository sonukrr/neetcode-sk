class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // TC - O(n). SC - O(n)
    twoSum(nums, target) {
        const prevMap = new Map();

        for(let i = 0; i < nums.length; i++){
            let diff = target - nums[i];
            if(prevMap.has(diff) && i != prevMap.get(diff)){
                return [prevMap.get(diff), i];
            }

            prevMap.set(nums[i], i);
        }

        return [];
        
    }
}
