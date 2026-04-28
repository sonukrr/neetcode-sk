class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if(digits.length == 0)
            return [];
            
        const res = [];

        const map = {
            2: 'abc',
            3: 'def',
            4: 'ghi',
            5: 'jkl',
            6: 'mno',
            7: 'pqrs',
            8: 'tuv',
            9: 'wxyz'
        }

        dfs(0, []);
        return res;

        function dfs(digiIdx, curr){
            // if(digiIdx == digits.length){
            //     return;
            // }
            if(curr.length == digits.length){
                res.push([...curr].join(''));
                return;
            }

            const chars = map[digits[digiIdx]];

            for(let i = 0; i < chars.length; i++){
                // curr digit char
                // explore with curr char 
                curr.push(chars[i]);
                dfs(digiIdx + 1, curr);
                curr.pop();

            }
        }
    }
}
