class MinHeap {
    constructor() {
        this.heap = [-1];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.heap.push(val);

        //percolate up 
        // - curr < root swap
        // - curr = root
        let i = this.heap.length - 1;
        while (i > 1 && this.heap[i] < this.heap[Math.floor(i / 2)]) {
            [this.heap[i], this.heap[Math.floor(i / 2)]] = [this.heap[Math.floor(i / 2)], this.heap[i]];
            i = Math.floor(i / 2);
        }


    }

    /**
     * @return {number}
     */
    pop() {
        let res = this.heap[1];
        if (res == undefined) return -1;
        if (this.heap.length == 2) {
            return this.heap.pop();
        }

        // remove root and replace with last element
        // percolate down the root
        this.heap[1] = this.heap.pop();
        let i = 1;

        while (2 * i < this.heap.length) {
            let left = 2*i;
            let right = 2*i + 1;

            let smallest = left;

            if(right < this.heap.length && this.heap[right] < this.heap[left]){
                smallest = right;
            }

            if(this.heap[smallest] < this.heap[i]){
                [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
                i = smallest;
            }else{
                break;
            }
            
        }

        return res;
    }

    /**
     * @return {number}
     */
    top() {
        return this.heap.length > 1 ? this.heap[1] : -1;
    }

    /**
     * @param {number[]} nums
     * @return {void}
     */
    heapify(nums) {
        this.heap = [-1];

        for (let i = 0; i < nums.length; i++) {
            this.push(nums[i]);
        }

    }
}
