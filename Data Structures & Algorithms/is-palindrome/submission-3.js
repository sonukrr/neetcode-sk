class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase();
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            while(left < right && !checkIfAlphaNum(s[left]))
                left++;
                
            while(left < right && !checkIfAlphaNum(s[right]))
                right--;
                
            if (s[left] !== s[right]){
                return false
            }

            left++;
            right--;
        }

        return true;

        function checkIfAlphaNum(char) {
            return (char >= 'a' && char <= 'z')
                || (char >= 'A' && char <= 'Z')
                || (char >= '0' && char <= '9')
                 
        }
    }
}
