class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        
        let len = Infinity;
        let sum = 0;


        let l = 0;
        let r = 0;

        while(r < nums.length){

            if(sum < target){
                // add
                sum += nums[r];
                r++;
            }else{
                sum -= nums[l];
                len = Math.min(len, r - l);
                l++;

            }

            
        }

        while(sum >= target){
            sum -= nums[l];
            len = Math.min(len, r - l);
            l++;
        }


        return len == Infinity ? 0 : len;
    }
}
