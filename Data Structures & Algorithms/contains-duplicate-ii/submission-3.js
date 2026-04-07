class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {

        let l = 0;
        let r = 0;
        while(l <= nums.length){
            r = l + 1;

            while(r < nums.length && r <= l + k){
                if(nums[l] == nums[r])
                    return true;
                
                r++;
            }

            l++;
            
        }

        return false;
    }
}
