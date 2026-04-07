class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let obj = {};
        for(let i=0; i < nums.length; i++){
            obj[nums[i]] = i;
        }

        let idx = 0;
        while(idx < nums.length){
            let diff = target - nums[idx];
            if(obj[diff] !== undefined && idx !== obj[diff]){
                return [idx, obj[diff]];
            }

            idx++;
        }

    }
}
