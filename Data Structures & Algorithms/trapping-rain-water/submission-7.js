class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if(height.length == 0) return 0;

        let res = 0;
        const n = height.length;
        const stack = [];

        for(let i = 0; i < n; i++){
            while(stack.length > 0 && height[i] >= height[stack[stack.length - 1]]){
                let right = height[i];
                let valley = height[stack.pop()];

                if(stack.length > 0){
                    let left = height[stack[stack.length - 1]];
                    const h = Math.min(left, right) - valley;
                    const w = i - stack[stack.length -1] - 1;
                    res += h * w;
                }
            }

            stack.push(i);
        }

        return res;
    }
}
