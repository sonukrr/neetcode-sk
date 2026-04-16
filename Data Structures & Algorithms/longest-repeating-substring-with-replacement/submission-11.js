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
        let maxf = 0;
        // sliding window
        // valid - len - maxFre <= k
        // invalid - l++, count--
        for(let r = 0; r < s.length; r++){
            let charIdx = s.charCodeAt(r) - 'A'.charCodeAt(0);
            count[charIdx]++;

            // Why we dont care about decrementing maxf when wondow is invalid ?
            // as we are trying to find the max substring, so even if we decrement the res is never
            // going to change. It only changes when maxf is incremented
            maxf = Math.max(maxf, count[charIdx]);
            
            // as window increases by only 1 so if will work. no need of while loop
            if((r - l + 1) - maxf > k){
                count[s.charCodeAt(l) - 'A'.charCodeAt(0)]--;
                l++;
            }

            res = Math.max(res, r - l + 1);
        }


        return res;


    }
}
