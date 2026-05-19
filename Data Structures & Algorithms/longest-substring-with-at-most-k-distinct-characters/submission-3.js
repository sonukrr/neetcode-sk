class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    lengthOfLongestSubstringKDistinct(s, k) {
        let map = {};
        let res = 0;

        let l = 0,
            r = 0;

        
        while(r < s.length){
            let c = s[r];

            // add
            map[c] = (map[c] || 0) + 1;

            // invalid window
            // have > needed
            while(Object.keys(map).length > k){
                // keep removing from left till it becomes valid again
                map[s[l]]--;
                if(map[s[l]] == 0){
                    delete map[s[l]];
                }
                l++;
            }

            // update answer
            res = Math.max(res, r - l + 1);

            r++;
        }

        return res;


    }
}
