class Solution {
  maxProfit(arr) {
    const n = arr.length;
    let l = 0;
    let r = 1;
    let res = 0;

    while (r < n) {
      if (arr[r] > arr[l]) {
        // curr is greater so sell
        res = Math.max(res, arr[r] - arr[l]);
      } else {
        // reset if curr is greater
        l = r;
      }
      r++;
    }

    return res;
  }
}
