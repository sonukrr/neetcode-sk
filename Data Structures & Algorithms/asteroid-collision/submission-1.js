class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack = [];

        for(let i = 0; i < asteroids.length; i++){
            let ast = asteroids[i];

            while(stack.length > 0 && ast < 0 && stack[stack.length - 1] > 0){
                let diff = ast + stack[stack.length - 1];
                if(diff == 0){
                    // equal mag. destroy both
                    ast = 0;
                    stack.pop();
                }else if (diff > 0){
                    // curr is lesser. destroy
                    ast = 0;
                }else{
                    // curr is greater in mag
                    stack.pop();
                }
            } 

            if(ast != 0)
                stack.push(ast);
        
        }


        return stack;
    }
}
