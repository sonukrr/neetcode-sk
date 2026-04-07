class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // TC - O(n), SC - O(1)
    removeDuplicates(nums) {
        let l = 1;
        for(let r=1; r < nums.length; r++){
            if(nums[r] !== nums[r-1]){
                nums[l] = nums[r];
                l++;
            }
        }

        return l;

    }
}
