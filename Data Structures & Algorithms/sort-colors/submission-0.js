class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        
        let l = 0;
        let r = nums.length - 1;

        let mid = 0;

        while(mid <= r){
            if(nums[mid] == 0){
                [nums[l], nums[mid]] = [nums[mid], nums[l]];
                l++;
                mid++;
            }else if(nums[mid] == 1){
                mid++;
            }else{
                // nums[mid] == 2
                [nums[r], nums[mid]] = [nums[mid], nums[r]];
                r--;
            }
        }

        return nums;
    }
}
