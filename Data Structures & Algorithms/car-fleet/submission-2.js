class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let pair = position.map((el, i) => [el, speed[i]]);
        pair.sort((n1, n2) => n1[0] - n2[0]);
        const stack = [];

        for(let i = pair.length - 1; i >= 0; i--){
            stack.push((target - pair[i][0]) / pair[i][1]);

            // if time to reach for current is lesser than the top of stack, it's eventually going to collie and reach and marked as one fleet
            if(stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]){
                stack.pop();
            }
        }

        return stack.length;
    }
}
