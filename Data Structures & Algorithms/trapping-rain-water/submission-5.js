class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        // leftMax and rightMax arrays
        // the minimum of left and right decides the water height at a given index
        const n = height.length;
        let leftMax = Array(n).fill(0);
        let rightMax = Array(n).fill(0);

        let res = 0;

        let lMax = 0;
        let rMax = 0;
        for(let i = 0; i < n; i++){
            lMax = Math.max(height[i], lMax);
            leftMax[i] = lMax;

            rMax = Math.max(height[n - 1 - i], rMax);
            rightMax[n - 1 - i] = rMax;
        }

        for(let i = 0; i < n; i++){
            res += Math.min(leftMax[i], rightMax[i]) - height[i];
        }

        return res;
    }
}
