class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        var pairs = {
            '{' : '}',
            '[' : ']',
            '(' : ')'
        };

        let stack = [];
        for(let i=0; i<s.length; i++){
            if(pairs[s[i]]){
                stack.push(s[i]);
            }else{
                let popped = stack.pop();
                if(s[i] != pairs[popped])
                    return false;
            }
        }

        return stack.length == 0;
    }
}
