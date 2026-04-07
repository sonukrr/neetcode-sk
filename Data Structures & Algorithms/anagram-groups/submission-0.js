class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const obj = {};
        for(let i=0; i<strs.length; i++){
            let sortedStr = strs[i].split('').sort().join('');
            if(!obj[sortedStr]){
                obj[sortedStr] = [];
            }

            obj[sortedStr].push(strs[i]);
        }

        return Object.values(obj);
    }
}
