class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  // TC - O(n), SC - O(n)
  topKFrequent(nums, k) {
    const counts = Array.from({ length: nums.length + 1 }, () => []);
    const freq = {};
    const res = [];

    // Frequency map
    for (const num of nums) {
      freq[num] = (freq[num] || 0) + 1;
    }

    // Bucket sort by frequency
    for (const key in freq) {
      counts[freq[key]].push(Number(key));
    }

    // Collect top k
    for (let i = counts.length - 1; i > 0 && res.length < k; i--) {
      for (const num of counts[i]) {
        res.push(num);
        if (res.length === k) break;
      }
    }

    return res;
  }
}
