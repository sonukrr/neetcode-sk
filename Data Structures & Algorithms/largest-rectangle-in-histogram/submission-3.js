class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = [];
        let maxArea = 0;

        for (let i = 0; i < heights.length; i++) {
            
            let start = i;


            while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
                let [idx, h] = stack.pop();
                maxArea = Math.max(maxArea, h * (i - idx));
                start = idx;
            }

            stack.push([start, heights[i]]);

        }

        while (stack.length > 0) {
            let [idx, h] = stack.pop();
            maxArea = Math.max(maxArea, h * (heights.length - idx));
        }

        return maxArea;
    }
}
