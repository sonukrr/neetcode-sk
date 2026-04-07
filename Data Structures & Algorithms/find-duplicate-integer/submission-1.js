class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        var arr = new Array(nums.length - 1).fill(0);
        for (const num of nums) {
            if (arr[num - 1] == 1) {
                return num;
                break;
            }
            arr[num - 1] = 1;
        }

        return -1;
    }
}