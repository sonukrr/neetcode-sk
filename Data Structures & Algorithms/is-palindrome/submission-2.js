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
            if (!checkIfAlphaNum(s[left])){
                left++;
                continue;
            }
                

            if (!checkIfAlphaNum(s[right])){
                right--;
                continue;
            }
                

            console.log(s[left], s[right])
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
