class Solution {
  networkDelayTime(times, n, k) {

    // Bellman ford algortithm

    const distance = new Array(n).fill(Infinity); // distance of all nodes set to infinity
    distance[k - 1] = 0; // distance of the source node from itself is set ot 0

    // for V - 1 times
    let V = n;
    for(let i = 0; i < V - 1; i++){

        for(const [u,v, w] of times){
            let cost = distance[u - 1] + w; // cost from u to v
            distance[v - 1] = Math.min(distance[v - 1], cost);
        }
    }
    let res = Math.max(...distance); 
    return  res == Infinity ? -1 : res;
  }
}

