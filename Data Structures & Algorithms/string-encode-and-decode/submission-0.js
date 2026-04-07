class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        var res = "";
        for(const str of strs){
            let encoded = `${str.length}#${str}`;
            res += encoded;
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        for(let i=0; i<str.length;){
            let start = i;
            let count = '';
            while(str[start] != '#'){
                count += str[start];
                start++;
            }
            count = parseInt(count);
            let decodedStr = "";
            let j= start + 1;
            while(count > 0){
                decodedStr += str[j];
                count--;
                j++;
            }
            
            i = j;
            res.push(decodedStr);
        }

        return res;
    }
}