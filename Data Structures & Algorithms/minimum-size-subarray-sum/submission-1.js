class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {

        var l = 0;
        var r = 0;
        let res = Infinity;
        
        let currSum = 0;
        while(r < nums.length){
            currSum += nums[r];
             
            while(currSum >= target){
                res = Math.min(res, r - l + 1);
                currSum -= nums[l];
                l++;
            }

            r++;

        }

        return res == Infinity ? 0 : res;
    }
}
