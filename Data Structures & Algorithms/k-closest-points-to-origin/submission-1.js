class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let heap = new MinPriorityQueue((point) => point[0]);

        for(const point of points){
            let [x,y] = point;
            let val = Math.sqrt(x ** 2 + y ** 2);
            heap.enqueue([val, x, y]);
        }

        const res = [];
        for(let i = 0; i < k; i++){
            const [_, x, y] = heap.dequeue();
            res.push([x,y]);
        }

        return res;
    }
}
