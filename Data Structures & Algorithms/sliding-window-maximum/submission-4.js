class Solution{
  maxSlidingWindow(nums, k) {

    const res = [];
    let l = 0;
    let max = -Infinity;    

    let r = k - 1;

    while(r < nums.length){

        let num = nums.slice(l, r + 1);

      res.push(Math.max(max, ...num));

     l++;
     r++;

      
    }
    return res;


  }
}