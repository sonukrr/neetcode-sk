class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        var res = 0;

        for(let i = 0; i < nums.length; i++){
            let len = 1;
            let n = nums[i];
            while(set.has(n + 1)){
                len++;
                n++;
            }

            res = Math.max(res, len);

        }

        return res;
    }
}