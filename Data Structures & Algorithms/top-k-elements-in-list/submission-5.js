class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
      if(k == 0 || nums.length == 0) return [];

      var count = {};
      for(const num of nums){
        count[num] = (count[num] || 0) + 1;
      }

      var sortedCount = {};
      for(let i=0; i<nums.length; i++){
        sortedCount[i + 1] = []; 
      }

      console.log(sortedCount);

      for(const key in count){
        let val = count[key];
        sortedCount[val].push(key);
      }

      const res = [];
      let max = nums.length;
      while(k > 0){
        if(sortedCount[max].length > 0){
          res.push(...sortedCount[max]);
          k = k - sortedCount[max].length;
          
        }

        max--;
        
      }

      return res;
    }
}