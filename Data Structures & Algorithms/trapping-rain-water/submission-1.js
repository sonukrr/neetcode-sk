class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftRunningMax = Array(height.length).fill(0);
        let rightRunningMax = Array(height.length).fill(0);

        let res = 0;

        let max = height[0];
        for(let i = 1; i < height.length; i++){
            leftRunningMax[i] = max;
            max = Math.max(max, height[i]);
        }

        max = height[height.length -1];
        for(let i = height.length - 2; i >= 0; i--){
            rightRunningMax[i] = max;
            max = Math.max(max, height[i]);
        }

        for(let i = 0; i < height.length - 1; i++){
            let vol = Math.min(leftRunningMax[i], rightRunningMax[i]) - height[i];
            if(vol > 0)
                res += vol;
        }

        return res;
    }
}
