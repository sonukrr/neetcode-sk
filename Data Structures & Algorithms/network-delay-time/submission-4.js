class Solution{

    networkDelayTime(times,n, k){

        const adj = {};
        for(const [u, v, w] of times){
            if(!adj[u]) adj[u] = [];

            adj[u].push([v, w]);
        }

        // min heap to always pick the shortest path to reach a node
        const heap = new MinPriorityQueue(item => item[0]);        

        // track the number of visited nodes
        const set = new Set();
        
        heap.enqueue([0, k]);
        let res = 0;

        while(!heap.isEmpty()){            
            let [t, n] = heap.dequeue();
            if(set.has(n)) continue;            
            set.add(n);   

            res = t;       
                        
            for(const [v, w] of (adj[n] || [])){
                if(!set.has(v)){
                    heap.enqueue([t + w, v]);
                }
            }
        }

        

        return set.size == n ? res : -1;


    }
}