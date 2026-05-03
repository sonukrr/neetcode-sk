class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const arr = new Array(26).fill(0);

        for(const c of s){
            let idx = c.charCodeAt(0) - 97;
            arr[idx] += 1;
        }

        for(const c of t){
            let idx = c.charCodeAt(0) - 97;
            arr[idx] -= 1;
        }

        return arr.every(count => count == 0);
    }
}
