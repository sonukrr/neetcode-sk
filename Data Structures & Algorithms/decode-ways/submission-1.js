class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const memo = {};
        return dfs(0);

        function dfs(i) {
            if (i === s.length) return 1;
            if(memo[i]) return memo[i];

            if (s[i] == '0') return 0;

            let res = dfs(i + 1);            

            if (i < s.length - 1) {
                if (s[i] == '1' || (s[i] == '2' && s[i + 1] < '7')) {
                    res += dfs(i + 2);
                }
            }

            memo[i] = res;
            
            return res;
        }
    }
}
