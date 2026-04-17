class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        var set = new Set();

        while (!set.has(n) && n != 1) {
            set.add(n);
            let num = n;
            let sum = 0;
            while (num > 0) {
                let digit = num % 10;
                sum += (digit * digit);
                num = Math.floor(num / 10);

            }

            n = sum;
        }

        return n == 1;

    }
}
