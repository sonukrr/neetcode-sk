class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        
        let count = new Array(26).fill(0);
        var res = 0;

        let l = 0;
        let r = 0;
        // sliding window
        // valid - len - maxFre <= k
        // invalid - l++, count--
        for(let r = 0; r < s.length; r++){
            count[s.charCodeAt(r) - 'A'.charCodeAt(0)]++;
            let maxf = Math.max(...count);
            while((r - l + 1) - maxf > k){
                count[s.charCodeAt(l) - 'A'.charCodeAt(0)]--;
                l++;
            }

            res = Math.max(res, r - l + 1);
        }


        return res;


    }
}
