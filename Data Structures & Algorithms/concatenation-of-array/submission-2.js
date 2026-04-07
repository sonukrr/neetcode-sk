class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // TC - O(n), SC - O(n)
    getConcatenation(nums) {
        let k = nums.length;
        for(let i=0; i<k; i++){
            nums[i+k] = nums[i];
        }
        return nums;
    }
}
