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
            while(l >= 0 && heights[l] >= heights[i]){
                l--;
            }

            let r = i + 1;
            while(r < heights.length && heights[r] >= heights[i]){
                r++;
            }

            // index stopped at plus 1 at left and right. so its r - l + 1 - 2
            res = Math.max(res, heights[i] * (r - l - 1));
            
            i++;
        }
      

        return res;
    }
}
