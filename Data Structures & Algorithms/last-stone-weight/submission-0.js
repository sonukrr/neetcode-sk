class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let maxHeap = new MaxPriorityQueue();

        for(const stone of stones){
            maxHeap.enqueue(stone);
        }

        while (maxHeap.size() > 1) {
            let val1 = maxHeap.dequeue();
            let val2 = maxHeap.dequeue();

            let diff = Math.abs(val1 - val2);

            maxHeap.enqueue(diff);
        }

        return maxHeap.front();
    }
}
