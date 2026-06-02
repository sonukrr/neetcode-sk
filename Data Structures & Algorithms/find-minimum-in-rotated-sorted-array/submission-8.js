class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        const n = nums.length - 1;
        // already sorted
        if (nums[0] < nums[n]) return nums[0];

        let l = 0;
        let r = nums.length - 1;

        let min = Infinity;

        while (l <= r) {
            // already sorted 
            if (nums[l] < nums[r]) {
                min = Math.min(min, nums[l]);
                break;
            }
            const mid = Math.floor(l + (r - l) / 2);

            min = Math.min(min, nums[mid]);

            if (nums[l] <= nums[mid]) {
                // sorted needs to be rejected
                l = mid + 1;
            } else {
                // min values exist in unsorted region
                r = mid - 1;
            }
        }

        return min;
    }
}
