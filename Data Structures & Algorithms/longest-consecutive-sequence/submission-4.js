class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        if (nums.length == 0) return 0;
        nums.sort((n1, n2) => n1 - n2);

        let maxLen = 1;
        let currLen = 1;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == nums[i + 1])
                continue;

            if (nums[i] == nums[i + 1] - 1) {
                currLen++;
                maxLen = Math.max(currLen, maxLen);
            } else {
                currLen = 1;
            }
        }

        return maxLen;
    }
}
