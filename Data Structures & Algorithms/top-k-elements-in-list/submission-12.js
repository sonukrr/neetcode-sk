class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
      
      const arr = Array.from({length: nums.length + 1}, () => []); // plus 1 as we need index to represent max the length of arr count
      const res = [];

      const freq = {};
      // step 1: freq count
      for(const num of nums){
        freq[num] = (freq[num] || 0) + 1;
      }

      // step 2: bucket sort by freq
      for(const num in freq){
        let count = freq[num];
        arr[count].push(num);
      }

      // step 3: collect the top k elements backwards
      for(let i = arr.length - 1; i >= 0 && res.length < k; i--){
        for(const num of arr[i]){
          res.push(num);          
        }
      }

      return res;
        
    }
}