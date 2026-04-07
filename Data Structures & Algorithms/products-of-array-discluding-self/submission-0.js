class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = [];
        const leftToRightProduct = [];
        const rightToLeftProduct = [];

        let prod = 1;
        for(let i = 0; i < nums.length; i++){
            leftToRightProduct[i] = prod;
            prod *= nums[i];

        }

        prod = 1;
        for(let i = nums.length - 1; i >= 0; i--){
            rightToLeftProduct[i] = prod;
            prod *= nums[i];
        }

        for(let i = 0; i < nums.length; i++){
            res[i] = leftToRightProduct[i] * rightToLeftProduct[i];
        }

        return res;
    }
}
