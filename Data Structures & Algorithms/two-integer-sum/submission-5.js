class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        
        for(let i = 0; i < nums.length; i++){
            map.set(nums[i], i);
        }

        for(let i = 0; i < nums.length; i++){
            let diff = target - nums[i];
            if(map.has(diff) && i != map.get(diff)){
                return [i, map.get(diff)];
            }
        }

        return [];
        
    }
}
