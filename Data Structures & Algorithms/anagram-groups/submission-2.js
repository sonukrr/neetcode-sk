class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      const res = {};
      
      for(let i=0; i<strs.length; i++){
        const freq = new Array(26).fill(0);
        let str = strs[i];

        for(let j=0; j<str.length; j++){
            let idx = str.charCodeAt(j) - "a".charCodeAt(0);
            freq[idx]++;
        }

        const key = freq.join(',');
        if(!res[key])
            res[key] = [];
        
        res[key].push(str);
      }

     return Object.values(res);

    }
}
