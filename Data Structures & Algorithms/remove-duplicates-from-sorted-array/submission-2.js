class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        if(nums.length <= 1) return nums.length;

        let count = 1;
        let idxToPlace = 0;
        let curr = 1;
        while(curr < nums.length){
            if(nums[curr] !== nums[idxToPlace]){
                idxToPlace++;
                nums[idxToPlace] = nums[curr];
                count++;
            }

            curr++;
        }

        return count;
        
    }
}



