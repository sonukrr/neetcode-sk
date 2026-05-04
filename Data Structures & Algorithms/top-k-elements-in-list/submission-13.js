class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {

    const freq = {};
    for (const num of nums) {
      freq[num] = (freq[num] || 0) + 1;
    }

    // add top k to min heap
    const heap = new MinPriorityQueue(a => a[0]);

    for (const num in freq) {
      heap.enqueue([freq[num], num]);

      if(heap.size() > k){
        heap.dequeue();
      }

    }

    const res = [];
    while (!heap.isEmpty()) {
      console.log(heap.size())
      let [_, num] = heap.dequeue();
      res.push(num);
    }

    return res;


  }
}