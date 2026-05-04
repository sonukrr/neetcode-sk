class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {};
        for(const num of nums){
          freq[num] = (freq[num] || 0) + 1;
        }

        // array of placing nums in there rspc count indices
        const arr = Array(k);

        for(const num in freq){
          let count = freq[num];
          if(!arr[count]){
            arr[count] = [];
          }

          arr[count].push(num);
        }

        const res = [];
        let i = arr.length - 1;
        while(i >= 0){
          let nums = arr[i];
          if(nums)
          for(let num of nums){            
              res.push(num);

              if(res.length == k)
                return res;
            
          }
          i--;
        }
        
    }
}