class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    // TC - O(n), SC - O(n)
    isValid(s) {
        const pairs = {
            '}' : '{',
            ']' : '[',
            ')' : '('
        }

        var stack = [];

        for(const c of s){
            if(pairs[c] == undefined) stack.push(c);
            else {
                let pop = stack.pop();
                if(pop != pairs[c])
                    return false;
            }
        }

        return stack.length == 0;
    }
}
