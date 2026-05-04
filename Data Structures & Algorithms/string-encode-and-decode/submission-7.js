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

           let len = parseInt(str.substring(i, j));
           i = j + 1;
           j = i + len;
           let word = str.substring(i, j);
           res.push(word);
           
           i = j;
        }

        return res;
    }
}
