class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        let res = 0;

        let l = 0;
        let r = 0;

        const map = {};
        let maxFreq = 0;

        
        while(r < s.length){
            map[s[r]] = (map[s[r]] || 0) + 1;

            maxFreq = Math.max(maxFreq, map[s[r]]);

            // invalid window
            while((r - l + 1) - maxFreq > k){
                map[s[l]]--;
                l++;
            }

            res = Math.max(res, r - l + 1);

            r++;
        }

        return res;

    }
}
