class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const arr = Array(nums.length).fill(1);

        let product = 1;
        for (let i = 0; i < nums.length; i++) {
            arr[i] = product;
            product *= nums[i];
        }

        product = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            arr[i] = arr[i] * product;
            product *= nums[i];
        }

        return arr;
    }
}
