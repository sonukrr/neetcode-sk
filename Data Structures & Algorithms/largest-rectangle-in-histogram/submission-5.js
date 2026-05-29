class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        // brute force : 
        // for a current bar, extend to left and rigth till a lesser bar height comes

        
        let res = 0;
        let i = 0;

        while(i < heights.length){
            // got to left
            let l = i - 1;
            let lArea = 0;
            while(l >= 0 && heights[l] >= heights[i]){
                lArea += Math.min(heights[l], heights[i]);
                l--;
            }

            let r = i + 1;
            let rArea = 0;
            while(r < heights.length && heights[r] >= heights[i]){
                rArea += Math.min(heights[r], heights[i]);
                r++;
            }

            res = Math.max(res, heights[i] + lArea + rArea);
            
            i++;
        }
      

        return res;
    }
}
