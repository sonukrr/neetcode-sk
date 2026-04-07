class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        
        let i = 0;
        while(i < tokens.length){
            if(!isNaN(tokens[i])){
                stack.push(Number(tokens[i]));
            }else{
                let num1 = stack.pop();
                let num2 = stack.pop();

                stack.push(getCalc(num2, num1, tokens[i]));
            }
            i++;
        }

        return stack.pop();

        function getCalc(first, second, op){
            if(op == '+')
                return first + second;
            else if(op == '-')
                return first - second;
            else if(op == '*')
                return first * second;
            else 
                return Math.trunc(first / second); // truncate towards 0
        }

    }
}
