class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // TC - O(n), SC - O(n)
    hasDuplicate(nums) {
        return new Set(nums).size < nums.length;
    }
}
