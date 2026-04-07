class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length == 0) return 0;
        const obj = {};
        let startNumbers = [];
        for(let i = 0; i < nums.length; i++){
            obj[nums[i]] = i;
        }

        for(let i = 0; i < nums.length; i++){
            if(obj[nums[i] - 1] === undefined){
                startNumbers.push(nums[i]);
            }
        }

        const seqCount = [];
        for(const num of startNumbers){
            let n = num;
            let count = 1;
            while(obj[n + 1] !== undefined){
                count++;
                n++;
            }

            seqCount.push(count);
        }


        return Math.max(...seqCount);
        


    }
}
