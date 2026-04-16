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
        while(r < s.length){
            freqMap[s[r]] = (freqMap[s[r]] || 0) + 1;
            let maxf = getMaxFreq();
            let replacementsNeeded = (r - l + 1) - maxf;

            if(replacementsNeeded <= k){
                res = Math.max(res, r - l + 1);
                r++;
            }else{
                freqMap[s[l]]--;
                freqMap[s[r]]--;
                l++;
            }
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
