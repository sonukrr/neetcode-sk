class Solution {
  maxProfit(arr) {
    const n = arr.length;
    let l = 0; // represent the buy 
    let r = 1; // represent the sell
    let res = 0;

    while (r < n) {
      // if sell price is greater, get the profit
      if (arr[r] > arr[l]) {        
        res = Math.max(res, arr[r] - arr[l]);
      } else {
        // reset if sell day is lesser
        l = r;
      }
      r++;
    }

    return res;
  }
}