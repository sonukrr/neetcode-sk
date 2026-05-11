class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
    
        let res = 0;

        let i = 0;
        let j = 1;
        while(j < prices.length){
            
            if(prices[j] > prices[i]){
                res = Math.max(res, prices[j] - prices[i]);
            }else{
                i = j;
            }

            j++;
            
        }

        return res;
    }
}
