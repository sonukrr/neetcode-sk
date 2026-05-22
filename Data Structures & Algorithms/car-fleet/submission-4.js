class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = position.map((p, idx) => [p, speed[idx]]);

        cars.sort((a, b) => b[0] - a[0]); // decreasing order. car that is nearest to target
        const stack = [];
        for(const [p, s] of cars){

            let time = (target - p) / s; // time to reach the target
            stack.push(time);
            
            // time to reach target is less or equal means it'll definitely catch up with the car before it so we merge them
            // and consider it as one fleet
            while(stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]){
                stack.pop();
            }

            
        }

        return stack.length;
    }
}
