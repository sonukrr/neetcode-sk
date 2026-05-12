class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length <= 1) return s.length;

        const visited = {};
        let len = 0;

        let l = 0;
        let r = 0;

        while (r < s.length) {
            let c = s[r];
            if (visited[c] != undefined) {
                l = Math.max(l, visited[c] + 1);
            }

            len = Math.max(len, r - l + 1);
            visited[c] = r;
            r++;

        }

        return len;


    }
}
