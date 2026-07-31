class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(str) {
   let maxLen = 0;
    let res = [0, 0];

    for(let i = 0; i < str.length; i++){
        let start = i;
        let end = i;

        while(end < str.length && str[end] == str[end + 1]){
            end++;
        }

        while(i >= 0 && end < str.length && str[start] == str[end]){
            end++;
            start--;            
        }

        if(end - start + 1 > maxLen){
            maxLen = end - start + 1;
            res = [start, end];
        }

    }

    return str.slice(res[0] + 1, res[1]);
    }
}
