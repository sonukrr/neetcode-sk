class Solution {
  maxProfit(prices) {
    let minBuy = prices[0];
    let maxP = 0;

    // we maintain the minbuy and keep calculating the profit for each sell
    for (let sell of prices) {
      maxP = Math.max(maxP, sell - minBuy);
      minBuy = Math.min(minBuy, sell);
      
    }

    return maxP;
  }
}