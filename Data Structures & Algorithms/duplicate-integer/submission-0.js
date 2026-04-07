class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        var obj = {};
        for(let i=0; i<nums.length; i++){
            if(obj[nums[i]])
                return true;
            else
                obj[nums[i]] = 1; 
        }

        return false;
    }
}
