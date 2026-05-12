class Solution {
    // sliding wondow
    maxProfit(arr) {
        const n = arr.length;
        let l = 0; // represent the buy 
        let r = 1; // represent the sell
        let res = 0;

        while (r < n) {
            // if sell price is greater, get the profit
            if (arr[r] < arr[l]) {
                l = r;
            }
            
            res = Math.max(res, arr[r] - arr[l]);
            r++;
        }

        return res;
    }
}