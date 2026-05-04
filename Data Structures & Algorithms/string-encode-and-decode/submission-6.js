class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = "";
        for(const str of strs){
            let separator = `${str.length}#`;
            encodedStr += (separator + str);
        }

        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str);
        const res = [];
        let i = 0; 
        while(i < str.length){
           let j = i;
           while(str[j] != '#'){
            j++;
           }

           let len = Number(str.substring(i, j));
           j = j + 1;
           let word = str.substring(j, j + len);
           res.push(word);
           j = j + len;
           i = j;
        }

        return res;
    }
}
