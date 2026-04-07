class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // TC - O(n^2), SC - O(n)
    longestConsecutive(nums) {
       var set = new Set();

       for(const num of nums){
        set.add(num);
       }

       let maxLen = 0;
       for(let i=0; i<nums.length; i++){
        let val = nums[i];
        
        // potential sequence start
        if(!set.has(val - 1)){
            let currLen = 0;
            while(set.has(val)){
                currLen++;
                val++;
            }
            maxLen = Math.max(currLen, maxLen);
        }
       }

       return maxLen;
    }
}
