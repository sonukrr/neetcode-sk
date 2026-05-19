class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        if(s1.length > s2.length) return false;

        const arr1 = Array(26).fill(0);
        const arr2 = Array(26).fill(0);

        // maintain a fixed sliding window of size s1
        for(let i = 0; i < s1.length; i++){
            arr1[s1[i].charCodeAt(0) - 97]++;
            arr2[s2[i].charCodeAt(0) - 97]++;
        }

        let matches = 0;
        for(let i = 0; i < 26; i++){
            if(arr1[i] == arr2[i]){
                matches++;
            }
        }

        let l = 0;

        for(let r = s1.length; r < s2.length; r++){
            if(matches == 26)
                return true;

            
            // add r char
            let rIdx = s2[r].charCodeAt(0) - 97;
            arr2[rIdx]++;
            if(arr2[rIdx] == arr1[rIdx]){
                matches++;
            }else if(arr1[rIdx] + 1 == arr2[rIdx]){
                matches--;
            }


            // remove l char
            let lIdx = s2[l].charCodeAt(0) - 97;
            arr2[lIdx]--;
            if(arr2[lIdx] == arr1[lIdx]){
                matches++;
            }else if(arr1[lIdx] - 1 == arr2[lIdx]){
                matches--;
            }

            l++;
        }

        return matches == 26;


    }
}
