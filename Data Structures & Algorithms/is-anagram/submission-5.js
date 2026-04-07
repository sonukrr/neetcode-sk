class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        

        let obj1 = {};
        for(let i=0; i<s.length; i++){
            obj1[s[i]] = (obj1[s[i]] || 0) + 1; 
        }

        for(let j=0; j<t.length; j++){
            if(obj1[t[j]] == undefined || obj1[t[j]] == 0)
                return false;
            else {
                obj1[t[j]] = obj1[t[j]] - 1;
            }
        }

        
        for(const key in obj1){
            if(obj1[key] != 0)
                return false;
        }

        return true;
    }
}
