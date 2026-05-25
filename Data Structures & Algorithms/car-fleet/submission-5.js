class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const pairs = position.map((p, idx) => [p, speed[idx]]);
        // sort by nearest to farther from target
        pairs.sort((a, b) => b[0] - a[0]);

        const stack = [];
        for(const [d, s] of pairs){
            // time taken to cover the remaining distance
            const t = (target - d) / s;

            stack.push(t);

            // top is less than prev
            while(stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]){
                stack.pop();
            }

        }

        return stack.length;
    }
}
