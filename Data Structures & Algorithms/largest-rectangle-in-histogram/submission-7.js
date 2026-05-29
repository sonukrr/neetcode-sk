class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        

        // storing indexes
        const leftMost = Array(heights.length).fill(-1);
        const rightMost = Array(heights.length).fill(heights.length);

        const stack = [];

        // monotonically increasing stack
        for(let i = 0; i < heights.length; i++){
            while(stack.length && heights[i] <= heights[stack[stack.length - 1]]){
                stack.pop();
            }

            if(stack.length > 0)
                leftMost[i] = stack[stack.length - 1];

            stack.push(i);
        }

        stack.length = 0;

        for(let i = heights.length - 1; i >= 0; i--){
            while(stack.length && heights[i] <= heights[stack[stack.length - 1]]){
                stack.pop();
            }

            if(stack.length > 0)
                rightMost[i] = stack[stack.length - 1];

            stack.push(i);
        }

        let res = 0;
        for(let i = 0; i < heights.length; i++){
            // index stopped at puls 1 for both
            leftMost[i] += 1;
            rightMost[i] -= 1;

            res = Math.max(res, heights[i] * (rightMost[i] -  leftMost[i] + 1));

        }

        return res;

    }
}