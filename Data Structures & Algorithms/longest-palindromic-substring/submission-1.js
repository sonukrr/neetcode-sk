class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(str) {
        let res = [0, 0];
        let maxLen = 0;
        const n = str.length;
        const dp = Array.from({ length: n }, () => new Array(n).fill(false));

        // start filling from bottom to up as we need i + 1, j - 1
        for (let i = n - 1; i >= 0; i--) {
            for (let j = 0; j < n; j++) {
                if (str[i] == str[j] && (j - i <= 2 || dp[i + 1][j - 1])) {
                    dp[i][j] = true;

                    if (j - i + 1 > maxLen) {
                        res = [i, j];
                        maxLen = j - i + 1;
                    }
                }
            }
        }

        return str.slice(res[0], res[1] + 1);
    }
}
