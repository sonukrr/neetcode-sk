class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;
        if(s1 == s2) return true;

        const freq1 = {};
        for(let i = 0; i < s1.length; i++){
            freq1[s1[i]] = (freq1[s1[i]] || 0) + 1;
        }

        // using classic sliding window
        let l = 0;
        let r = 0;
        let freq2 = {};

        while(r < s2.length){
            let c = s2[r];
            if(freq1[c] == undefined){
                freq2 = {};
                l++;
                r = l;
                continue;
            }
            
            freq2[c] = (freq2[c] || 0) + 1;

            
            // invalid window
            while(freq2[c] > freq1[c]){
                freq2[s2[l]]--;
                l++;
            }

            // now we have a valid window
            if(isPermutation(freq1, freq2)){
                return true;
            }

            r++;
        }


        return false;


        function isPermutation(obj1, obj2){
            
            for(const c in obj1){
                if(obj1[c] != obj2[c])
                    return false;
            }

            return true;
        }


    }
}
