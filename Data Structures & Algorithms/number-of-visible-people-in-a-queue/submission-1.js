class Solution {
    /**
     * @param {number[]} heights
     * @return {number[]}
     */
    canSeePersonsCount(heights) {
        const n = heights.length;
        const res = Array(n).fill(0);
        const stack = [];
        for (let i = 0; i < n; i++) {
            const h = heights[i];
            while (stack.length && heights[stack[stack.length - 1]] < h) {
                res[stack.pop()]++;
            }
            if (stack.length) {
                res[stack[stack.length - 1]]++;
            }
            stack.push(i);
        }
        return res;
    }
}