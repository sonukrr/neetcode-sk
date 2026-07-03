class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {

      // Shortest path faster algorithm
      
      // build adjacency list
      const adj ={};
      for(let i = 0; i < n; i++)
        adj[i] = [];

      for(const [u, v, w] of flights){
        adj[u].push([w, v]);
      }

      const q = new Queue([[0, src, 0]]); // cost , node, stops 
      const prices = new Array(n).fill(Infinity);
      prices[src] = 0;

      // relax the nodes
      while(!q.isEmpty()){
        let size = q.size();
        
        for(let i = 0; i < size; i++){     
          const [cost, node, stops] = q.pop();

          if(stops > k) continue;

          for(const [w, nei] of adj[node]){
            let newCost = cost + w;
            if(newCost < prices[nei]){
              prices[nei] = newCost;
              q.push([newCost, nei, stops + 1]);
            }
          }
        }
        
      }

      return prices[dst] == Infinity ? -1 : prices[dst];


    }
}