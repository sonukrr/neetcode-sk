class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxP = 0;
        let l = 0;
        let r = 1;

        while(r < prices.length){
            if(prices[l] < prices[r]){
                let profit = prices[r] - prices[l];
                maxP = Math.max(profit, maxP);
            }else{
                l = r;
            }

            r++;
        }
        return maxP;
    }
}
