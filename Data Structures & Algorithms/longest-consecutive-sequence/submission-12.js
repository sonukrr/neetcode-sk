class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let res = 0;
        
        for(let num of nums){
            // if num - 1 does not existing, this will be possible start of sequence
            if(!set.has(num - 1)){
                let len = 1;
                while(set.has(num + 1)){
                    len++;
                    num++;
                }
                res = Math.max(res, len);

            }
        }

        return res;
    }
}
