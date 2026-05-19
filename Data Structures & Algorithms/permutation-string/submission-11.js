class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const arr1 = new Array(26).fill(0);
        const arr2 = new Array(26).fill(0);

        // frequency map of s1
        for (let c of s1) {
            arr1[c.charCodeAt(0) - 97]++;
        }

        let l = 0;

        // sliding window of size s1.length
        for (let r = 0; r < s2.length; r++) {
            arr2[s2[r].charCodeAt(0) - 97]++;

            // keep window size fixed
            if (r - l + 1 > s1.length) {
                arr2[s2[l].charCodeAt(0) - 97]--;
                l++;
            }

            // compare frequency arrays
            if (isPermutation(arr1, arr2)) {
                return true;
            }
        }

        return false;

        function isPermutation(a, b) {
            for (let i = 0; i < 26; i++) {
                if (a[i] !== b[i]) return false;
            }

            return true;
        }
    }
}