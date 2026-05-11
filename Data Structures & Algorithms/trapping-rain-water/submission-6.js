class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        // eater at an index depends on the minimum of left and right wall. So if a wall is 
        // shorter on left right can't help us and vice versa

        
        let l = 0;
        let r = height.length - 1;
        let lMax = height[l];
        let rMax = height[r];
        let res = 0;

        while(l < r){
            if(lMax < rMax){
                // left wall is shorter, this will decide the water to be hold
                l++;
                lMax = Math.max(lMax, height[l]);
                res += lMax - height[l];
            }else{
                r--;
                rMax = Math.max(rMax, height[r]);
                res += rMax - height[r];
            }
        }

        return res;
    }
}
