class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        var l = 0;
        var r = nums.length - 1;

        let res = nums[0];

        while(l <= r){
            if(nums[l] <= nums[r]){
                res = Math.min(res, nums[l]);
                break;
            }

            let mid = Math.floor((l + r)/2);
            res = Math.min(res, nums[mid]);

            if(nums[mid] <= nums[r]){
                r = mid - 1;
            }else{
                l = mid + 1;
            }
            
        }



        return res;
    }
}
