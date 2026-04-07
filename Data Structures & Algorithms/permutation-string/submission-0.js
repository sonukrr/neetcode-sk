class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const count = {};
        for (const c of s1) {
            count[c] = (count[c] || 0) + 1;
        }

        let required = s1.length;
        let l = 0;

        for (let r = 0; r < s2.length; r++) {
            let c = s2[r];

            if (count[c] !== undefined) {
                if (count[c] > 0) required--;
                count[c]--;
            }

            // window size exceeds s1 length → shrink from left
            if (r - l + 1 > s1.length) {
                let leftChar = s2[l];
                if (count[leftChar] !== undefined) {
                    if (count[leftChar] >= 0) required++;
                    count[leftChar]++;
                }
                l++;
            }

            if (required === 0) return true;
        }

        return false;
    }
}
