class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    // TC - O(m * n), SC - O(m * n)
    groupAnagrams(strs) {
        const res = {};
        for(const str of strs){
            let count = new Array(26).fill(0);
            for(let c of str){
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }

            const key = count.join(',');
            if(!res[key]){
                res[key] = [];
            }
            res[key].push(str);
        }

        console.log(res);
        return Object.values(res);
    }
}
