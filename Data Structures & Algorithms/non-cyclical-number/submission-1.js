class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let slow = n;
        let fast = this.sumOfSquares(n);

        while(slow != fast){
            slow = this.sumOfSquares(slow);
            fast = this.sumOfSquares(fast);
            fast = this.sumOfSquares(fast);
        }

        return fast == 1;

    }

    sumOfSquares(n){
        let sum = 0;

        while(n > 0){
            sum += (n % 10) ** 2;
            n = Math.floor(n / 10);
        }

        return sum;
    }
}