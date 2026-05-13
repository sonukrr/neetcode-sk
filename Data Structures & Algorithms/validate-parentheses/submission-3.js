class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        var openSet = new Set(['(', '{', '[']);
        
        var map = {
            ')' : '(',
            '}' : '{',
            ']' : '['
        }

        for(let i = 0; i < s.length; i++){
            let c = s[i];
            if(openSet.has(c)){
                stack.push(c);
            }else{
                if(stack.length > 0){
                    let pop = stack.pop();
                    if(map[c] != pop)
                        return false;
                }else{
                    return false;
                }
                
            }
        }

        return stack.length == 0;
    }
}
