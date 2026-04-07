class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        const res = new Array(nums.length);

        for (let i = 0; i < nums.length; i++) {
            let idx = (i + k) % nums.length;
            res[idx] = nums[i];
        }

        for (let i = 0; i < nums.length; i++) {
            nums[i] = res[i];
        }

        return res;
    }
}
