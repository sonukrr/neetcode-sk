class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];
        dfs(0, 0, []);
        return res;

        function dfs(openCount, closeCount, curr) {
             if(closeCount > openCount)
                return;
                
            if (openCount + closeCount == 2 * n) {
                res.push(curr.join(''));
                return;
            }

           

            if (openCount < n) {
                // pick one open
                curr.push('(');
                dfs(openCount + 1, closeCount, curr);
                curr.pop();
            }


            if (closeCount < n) {
                // skip open pick and pick one close
                curr.push(')');
                dfs(openCount, closeCount + 1, curr);
                curr.pop();
            }
        }
    }
}
