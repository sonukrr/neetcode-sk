class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        return find(0, nums.length - 1);

        function find(l, r){
            if(l > r) return -1;

            const mid = Math.floor((l + r) / 2);

            if(nums[mid] == target)
                return mid;

            if(target > nums[mid])
                return find(mid + 1, r);
            else 
                return find(l, mid - 1);

        }
    }
}
