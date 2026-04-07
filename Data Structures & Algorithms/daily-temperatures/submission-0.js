class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = new Array(temperatures.length).fill(0);
        const res = new Array(temperatures.length).fill(0);

        var i = 0;
        while (i < temperatures.length) {
            let temp = temperatures[i];

            if (i == 0) {
                stack.push([temp, i]);
                i++;
                continue;
            }

            while (stack.length > 0 && temp > stack[stack.length - 1][0]) {
                let [_, idx] = stack.pop();
                res[idx] = i - idx;
            }

            stack.push([temp, i]);
            
            i++;
        }

        return res;
    }
}
