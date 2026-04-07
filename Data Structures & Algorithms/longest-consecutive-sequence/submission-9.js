class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // TC - O(n), SC - O(n)
    longestConsecutive(nums) {
       var set = new Set(nums);

       let maxLen = 0;
       for(const num of set){
    
        // only start counting if its the beginning of a sequence
        if(!set.has(num - 1)){
            let currNum = num;
            let currLen = 0;

            while(set.has(currNum)){
                currNum++;
                currLen++;
            }
            maxLen = Math.max(currLen, maxLen);
        }
       }

       return maxLen;
    }
}
