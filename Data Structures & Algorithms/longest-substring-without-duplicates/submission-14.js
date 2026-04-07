class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let map = {};
        let l = 0;
        let res = 0;

        for(let r = 0; r < s.length; r++){
            if(map[s[r]] != undefined){
                
                l = Math.max(map[s[r]] + 1, l);
            }

                map[s[r]] = r;
                res = Math.max(res, r - l + 1);
            
        }

        return res;
    }
}
