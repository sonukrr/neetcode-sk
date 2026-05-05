class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const arr = Array(nums.length).fill(1);

        let left = 1;
        let right = 1;
        for (let i = 0; i < nums.length; i++) {
            arr[i] *= left;
            arr[nums.length - 1 - i] *= right;

            left *= nums[i];
            right *= nums[nums.length - 1 - i];
        }


        return arr;

    }
}
