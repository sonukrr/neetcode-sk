class Solution {
  networkDelayTime(times, n, k) {
    const dist = Array.from({ length: n }, () => new Array(n).fill(Infinity));

    // filling the distance for k = 0;
    for (const [u, v, w] of times) {
      dist[u - 1][v - 1] = w;
    }

    // self loop distance is 0
    for (let i = 0; i < n; i++) {
      dist[i][i] = 0;
    }

    for (let mid = 0; mid < n; mid++) {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          dist[i][j] = Math.min(dist[i][j], dist[i][mid] + dist[mid][j]);
        }
      }
    }

    console.log(dist);

    let res = Math.max(...dist[k - 1]);

    return res == Infinity ? -1 : res;
  }
}
