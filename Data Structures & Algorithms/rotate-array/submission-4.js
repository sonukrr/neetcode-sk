class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {

        k = k % nums.length;

        reverse(0, nums.length - 1, nums);
        reverse(0, k - 1, nums);
        reverse(k, nums.length - 1, nums);

        return;

        function reverse(l, r, arr) {
            while (l <= r) {
                [arr[l], arr[r]] = [arr[r], arr[l]];
                l++;
                r--;
            }
        }
    }
}
