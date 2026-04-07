class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const pairs = position.map((p, i) => [p, speed[i]]);
        pairs.sort((n1, n2) => n2[0] - n1[0]);
        const stack = [];

        for(const [p, s] of pairs){
            let timeToReach = (target - p) / s;
            stack.push(timeToReach);

            // car that catches up can be ignored and considered as one fleet
            if(stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]){
                stack.pop();
            }

        }

        return stack.length;
    }
}
