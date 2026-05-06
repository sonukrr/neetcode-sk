class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            let l = s[left].toLowerCase().charCodeAt(0);
            let r = s[right].toLowerCase().charCodeAt(0);

            if (!isAlphaNum(l)) {
                left++;
                continue;
            }

            if (!isAlphaNum(r)) {
                right--;
                continue;
            }

            if (l !== r) {
                return false;
            }

            left++;
            right--;

        }

        return true;


        function isAlphaNum(code) {
            return (code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0)) ||
                (code >= '0'.charCodeAt(0) && code <= '9'.charCodeAt(0));
        }

    }


}
