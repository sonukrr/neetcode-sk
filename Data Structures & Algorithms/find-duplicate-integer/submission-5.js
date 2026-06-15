class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        for(let i = 0; i < nums.length; i++){
            let n = Math.abs(nums[i]);
            if(nums[n - 1] < 0){
                return n;
            }

            nums[n - 1] *= -1;
        }

        return -1;
    }
}
