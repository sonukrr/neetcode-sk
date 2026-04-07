class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let k = nums.length;
        for(let i=0; i<k; i++){
            nums.push(nums[i]);
        }
        return nums;
    }
}
