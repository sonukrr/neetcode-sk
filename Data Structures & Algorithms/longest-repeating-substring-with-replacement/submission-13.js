class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0;
        let res = 0;

        const map = {};
        let maxFreq = 0;

        for (let r = 0; r < s.length; r++) {
            let c = s[r];

            // add current char to window
            map[c] = (map[c] || 0) + 1;

            // keep track of most frequent char in window
            maxFreq = Math.max(maxFreq, map[c]);

            // invalid window:
            // chars needing replacement > k
            while ((r - l + 1) - maxFreq > k) {
                map[s[l]]--;
                l++;
            }

            // update answer with valid window size
            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}