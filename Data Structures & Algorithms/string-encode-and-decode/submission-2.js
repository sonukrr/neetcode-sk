class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        var encodedStr = "";
        for (const str of strs) {
            encodedStr += `${str.length}#${str}`;
        }

        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decodedStrs = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            // find delimiter
            while (str[j] !== '#') {
                j++;
            }

            const length = parseInt(str.slice(i, j));
            const start = j + 1;
            const end = start + length;

            decodedStrs.push(str.slice(start, end));

            i = end; // move to next encoded part
        }

        return decodedStrs;
    }

}