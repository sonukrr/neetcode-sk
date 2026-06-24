class Solution {
  canFinish(numCourses, list) {
    // Kahn's algo / topological sort
    // remove the nodes with 0 deps first and then keep on removing the nodes dependent on it.
    // by maintianing an indegree map

    const indegree = {};
    const premap = {};

    for (let i = 0; i < numCourses; i++) {
      indegree[i] = 0;
      premap[i] = [];
    }

    // indegree of all vertex
    for (const [c, pre] of list) {
      indegree[pre]++;
      premap[c].push(pre);
    }

    // process all indegree = 0 vertex

    const q = new Queue();

    for (const key in indegree) {
      if (indegree[key] == 0) {
        q.push(key);
      }
    }

    const topo = [];
    while (!q.isEmpty()) {
      let size = q.size();

      for (let i = 0; i < size; i++) {
        const c = q.pop();

        if (indegree[c] == 0) {
          topo.push(+c);
        }
        
    
        for (const nei of premap[c]) {
          indegree[nei]--;

          if (indegree[nei] == 0) {
            q.push(nei);
          }
        }
      }
    }
    

    return topo.length == numCourses;
  }
}
