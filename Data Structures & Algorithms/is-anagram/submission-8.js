class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // HASHTABLE
    isAnagram(s, t) {
        if(s.length !== t.length)
            return false;

        var counts = new Array(26).fill(0);

        for(let i=0; i<s.length; i++){
            counts[s.charCodeAt(i) - "a".charCodeAt(0)]++;
            counts[t.charCodeAt(i) - "a".charCodeAt(0)]--;
        }

        return counts.every(el => el == 0);
    }
}
