class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];

        

        for(const tok of tokens){
            if(tok == '+'){
                stack.push(stack.pop() + stack.pop());
            }else if(tok == '-'){
                let a = stack.pop();
                let b = stack.pop();
                stack.push(b - a);
            }else if(tok == '*'){
                stack.push(stack.pop() * stack.pop());
            }else if(tok == '/'){
                let a = stack.pop();
                let b = stack.pop();
                stack.push(Math.trunc(b/a));
            }else{
                stack.push(parseInt(tok));
            }
        }

        return stack.pop();
    }
}
