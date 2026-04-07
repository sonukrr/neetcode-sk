class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        var set = new Set();
        for(const num of nums){
            set.add(num);
        }

        let maxLen = 0;

        for(let i=0; i<nums.length; i++){
            let val = nums[i];
            let currLen = 0;
            while(set.has(val)){
                currLen++;
                val--;
            }

            maxLen = Math.max(currLen, maxLen);
            
        }

        return maxLen;
    }
}
