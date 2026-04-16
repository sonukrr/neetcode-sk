class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        
        let freqMap = {};
        var res = 0;

        let l = 0;
        let r = 0;
        // sliding window
        // valid - len - maxFre <= k
        // invalid - l++, count--
        for(let r = 0; r < s.length; r++){
            freqMap[s[r]] = (freqMap[s[r]] || 0) + 1;
            let maxf = getMaxFreq();
            while((r - l + 1) - maxf > k){
                freqMap[s[l]]--;
                l++;
            }

            res = Math.max(res, r - l + 1);
        }


        return res;

        function getMaxFreq(){
            let count = 0;
            for(const c in freqMap){
                count = Math.max(count, freqMap[c]);
            }
            return count;
        }
    }
}
