class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temps) {
        const res = Array(temps.length).fill(0);
        const minStack = [];

        for (let i = 0; i < temps.length; i++) {
            let temp = temps[i];

            if (minStack.length == 0) {
                minStack.push(i);
            } else {
                while (temp > temps[minStack[minStack.length - 1]]) {
                    let l = minStack.pop();
                    res[l] = i - l;

                }
                minStack.push(i)
            }
        }

        return res;
    }
}
