class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairs = {
            '}' : '{',
            ')' : '(',
            ']' : '['
        }

        const stack = [];

        let l = 0;
        while(l < s.length){
            if(pairs[s[l]] == undefined){
                stack.push(s[l]);
            }else{
                let top = stack.pop();
                if(top != pairs[s[l]])
                    return false;
            }
            l++;
        }

        return stack.length == 0;
    }
}
