class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = [];
        dfs(0, []);
        return res;


        function dfs(i, curr) {
            if (i >= s.length) {
                res.push([...curr]);
                return;
            }

            for(let j = i; j < s.length; j++){
                if(isPalindrome(i, j)){
                    curr.push(s.substring(i, j + 1));
                    dfs(j + 1, curr);
                    curr.pop();
                }
            }
        }

        function isPalindrome(l, r) {

            while (l < r) {
                if (s[l] != s[r])
                    return false;
                
                l++;
                r--;
            }

            return true;
        }
    }
}
