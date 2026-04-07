class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let leftRunningProduct = new Array(nums.length).fill(1);
        let rightRunningProduct = new Array(nums.length).fill(1);
        const res = new Array(nums.length).fill(1);

        let left = 1;
        let right = 1;
        for(let i=0; i<nums.length; i++){
            leftRunningProduct[i] = left;
            rightRunningProduct[nums.length - 1 - i] = right;

            left *= nums[i];
            right *= nums[nums.length - 1 - i];
        }

        for(let i=0; i<nums.length; i++){
            res[i] = leftRunningProduct[i] * rightRunningProduct[i];
        }

        return res;
    }
}
