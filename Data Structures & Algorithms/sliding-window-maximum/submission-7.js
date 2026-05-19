class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const maxHeap = new MaxPriorityQueue(x => x[0]);
        const res = [];
        let l = 0;
        let r = 0;

        while(r < nums.length){
            maxHeap.enqueue([nums[r], r]);

            if(r + 1 >= k){
                // make the window valid
                while(maxHeap.front()[1] < l){
                    maxHeap.dequeue();
                }

                res.push(maxHeap.front()[0]);
                l++;

            }
    
            r++;
        }

        return res;
    }
}
