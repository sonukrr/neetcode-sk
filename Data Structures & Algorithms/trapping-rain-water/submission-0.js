class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    // TC - O(n), SC - O(1)
    trap(height) {
        let n = height.length;
        if (n == 0) return 0;

        let l = 0;
        let r = n - 1;

        let leftMax = height[0];
        let rightMax = height[n - 1];

        var sum = 0;
        while (l < r) {
            if (leftMax < rightMax) {
                l++;
                let vol = leftMax - height[l];
                if (vol > 0)
                    sum += vol;
                leftMax = Math.max(height[l], leftMax);

            } else {
                r--;
                let vol = rightMax - height[r];
                if (vol > 0)
                    sum += vol;
                rightMax = Math.max(height[r], rightMax);

            }
        }

        return sum;
    }
}
