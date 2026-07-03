class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {

        const N = points.length;

        const adj = [];

        for (let i = 0; i < N; i++) {
            adj[i] = [];
        }

        for (let i = 0; i < points.length; i++) {
            const [x1, y1] = points[i];

            for (let j = i + 1; j < points.length; j++) {
                const [x2, y2] = points[j];

                let dist = Math.abs(x1 - x2) + Math.abs(y1 - y2);

                adj[i].push([dist, j]);
                adj[j].push([dist, i]);
            }
        }

        console.log(adj);


        let visit = new Set();
        let minHeap = new MinPriorityQueue(entry => entry[0]);

        minHeap.enqueue([0, 0]);

        let res = 0;

        while (!minHeap.isEmpty()) {
            let [cost, i] = minHeap.dequeue();

            if (visit.has(i)) continue;
                        
            visit.add(i);
            res += cost;

            for (const neighbor of adj[i]) {
                const [neiCost, nei] = neighbor;
                if (!visit.has(nei)) {
                    minHeap.enqueue([neiCost, nei]);
                }
            }

        }

        return res;
    }
}