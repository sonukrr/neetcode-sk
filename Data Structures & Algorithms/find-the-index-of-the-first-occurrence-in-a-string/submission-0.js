class Solution {
    /**
     * @param {string} haystack
     * @param {string} needle
     * @return {number}
     */
    /**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
    strStr(string, substring) {
        var lps = buildLPS();
        return searchPattern(lps);

        function buildLPS() {
            const arr = new Array(substring.length).fill(-1);
            let j = 0;
            let i = 1;

            while (i < substring.length) {
                if (substring[i] === substring[j]) {
                    arr[i] = j;
                    i++;
                    j++;
                } else if (j > 0) {
                    j = arr[j - 1] + 1;
                } else {
                    i++;
                }
            }


            return arr;
        }

        function searchPattern(lps) {
            let i = 0;
            let j = 0;

            while (i < string.length) {
                if (string[i] === substring[j]) {
                    if (j == substring.length - 1) return i - substring.length + 1;

                    i++;
                    j++;
                } else if (j > 0) {
                    j = lps[j - 1] + 1;
                } else {
                    i++;
                }
            }
            return -1;
        }
    }

}
