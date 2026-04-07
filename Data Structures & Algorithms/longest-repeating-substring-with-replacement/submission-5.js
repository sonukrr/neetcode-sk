class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = {};
        let res = 0;

        let l = 0,
        maxf = 0;

        for(let r = 0; r< s.length; r++){
            let c = s[r];
            count[c] = (count[c] || 0) + 1;
            
            maxf = Math.max(maxf, count[c]);

            while(r - l + 1 - maxf > k){
                count[s[l]] = count[s[l]] - 1;
                l++;
            }

            res = Math.max(res, r- l + 1);
        }

        return res;
    }
}
