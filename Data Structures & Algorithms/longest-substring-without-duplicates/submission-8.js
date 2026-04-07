class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let r = 0;
        let set = new Set();
        let res = 0;

        while(r < s.length){
            while(set.has(s[r])){
                set.delete(s[l]);
                l++;
            }
            set.add(s[r]);
            res = Math.max(res, r - l + 1);
            r++;
        }

        return res;
    }
}
