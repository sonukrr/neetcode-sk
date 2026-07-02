class Solution {
  networkDelayTime(times, n, k) {

    // Optmized Bellman ford algortithm - Shortest path faster algorithm
    //process only the nodes and ites neighbors where the shortest time changes

    const adj = {};
    for (const [u, v, w] of times) {
      if (!adj[u]) adj[u] = [];

      adj[u].push([v, w]);
    }

    const dist = {};
    for (let i = 1; i <= n; i++)
      dist[i] = Infinity;

    dist[k] = 0;

    let q = new Queue([[k, 0]]); // push the starting node

    while (!q.isEmpty()) {
      let [node, time] = q.pop();

      if (dist[node] < time) continue;

      for (const [nei, w] of (adj[node] || [])) {
        if (time + w < dist[nei]) {
          dist[nei] = time + w;

          q.push([nei, time + w]);
        }
      }
    }

    let res = Math.max(...Object.values(dist));

    return res == Infinity ? -1 : res;


  }
}

