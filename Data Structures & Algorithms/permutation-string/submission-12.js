class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        const arr1 = Array(26).fill(0);
        const arr2 = Array(26).fill(0);

        // freq map
        for(const c of s1){
            arr1[c.charCodeAt(0) - 97]++;
        }

        let l = 0; 
        let r = 0;

        while(r < s2.length){
            let idx = s2[r].charCodeAt(0) - 97;

            arr2[idx]++;

            // invalid window
            if(r - l + 1 > s1.length){
                arr2[s2[l].charCodeAt(0) - 97]--;
                l++;
            }

            // valid window so check

            if(isPermutation(arr1, arr2)){
                return true;
            }

            r++;
        }

        return false;

        function isPermutation(arr1, arr2){
            for(let i = 0; i < 26; i++){
                if(arr1[i] != arr2[i])
                    return false;
            }

            return true;
        }
    }
}
