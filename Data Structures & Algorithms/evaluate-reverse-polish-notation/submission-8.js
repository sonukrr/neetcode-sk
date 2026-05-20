class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        
        for(const c of tokens){
        
            if(['+', '-', '*', '/'].includes(c)){
                let num2 = Number(stack.pop());
                let num1 = Number(stack.pop());
                let res;
                if(c == '+')
                    res = num1 + num2;
                else if(c == '*')
                    res = num1 * num2;
                else if(c == '-')
                    res = num1 - num2;
                else res = Math.trunc(num1 / num2);

                stack.push(res);
            }else{
                stack.push(Number(c));
            }

            console.log(stack)
        }

        return stack[stack.length - 1];
        
    }
}
