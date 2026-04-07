class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;

        let left = 0;
        let right = heights.length - 1;

        while(left < right){
            let height = Math.min(heights[left], heights[right]);
            let width = right - left;

            max = Math.max(max, height * width);

            if(heights[left] < heights[right]){
                left++;
            }else{
                right--;
            }

        }

        return max;
    }
}
