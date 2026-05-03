class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // TC - O(n + m), SC - O(1)
    isAnagram(s, t) {
        if(s.length !== t.length) return false; // unequal length

        const arr = new Array(26).fill(0);

        for(let i = 0; i < s.length; i++){
            arr[s.charCodeAt(i) - 97] += 1; // inc count
            arr[t.charCodeAt(i) - 97] -= 1; // dec count
        }
      
        // check if all counts are 0
        return arr.every(count => count == 0);
    }
}
