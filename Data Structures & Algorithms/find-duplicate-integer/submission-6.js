class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow = 0;
        let fast = 0;

        // step 1 - intersection point of cycle
        do {
            slow = nums[slow];
            fast = nums[nums[fast]];
        } while (slow != fast);

        let curr = 0;

        // step 2 - start of cycle
        while (curr != slow) {
            curr = nums[curr];
            slow = nums[slow];
        }

        return curr;
    }
}
