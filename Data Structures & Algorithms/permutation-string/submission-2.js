class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const countS1 = new Array(26).fill(0);
        const countS2 = new Array(26).fill(0);

        for(let i = 0; i < s1.length; i++){
            countS1[s1.charCodeAt(i) - 97]++;
            countS2[s2.charCodeAt(i) - 97]++;
        }

        let matches = 0;
        for (let i = 0; i < 26; i++) {
            if (countS1[i] == countS2[i])
                matches++;
        }

        let l = 0;

        for (let r = s1.length; r < s2.length; r++) {
            if (matches == 26) return true;

            // addition of char in right
            let idx = s2.charCodeAt(r) - 97;
            countS2[idx] += 1;
            if (countS1[idx] == countS2[idx]) {
                matches++;
            } else if (countS1[idx] + 1 == countS2[idx]) {
                matches--;
            }



            // removal of char in left
            idx = s2.charCodeAt(l) - 97;
            countS2[idx] -= 1;
            if (countS1[idx] == countS2[idx]) {
                matches++;
            } else if (countS1[idx] - 1 == countS2[idx]) {
                matches--;
            }

            l++;

        }

        return matches == 26;


    }
}
