class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let r = 0;
        let res = 0;

        let obj = {};

        while(r < s.length){
            if(obj[s[r]] !== undefined){
                l = Math.max(l, obj[s[r]] + 1);
            }

            obj[s[r]] = r;
            res = Math.max(res, r - l + 1);
            r++;
        }

        return res;
    }
}
