class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        // topological sort (Kahn's algorithm)

        // take the course that has no prerequisites, mark it as completed
        // remove it from graph, gradullay unlocking other courses

        const indegree = Array(numCourses).fill(0); 
        const adj = Array.from({length: numCourses}, () => []); 

        for(const [course, preReq] of prerequisites){
            indegree[course]++; // how many dependencies I have
            adj[preReq].push(course); // who is dependent on me
        }

        const q = new Queue();

        for(let i = 0; i < numCourses; i++){
            if(indegree[i] === 0)
                q.push(i);
        }

        const res = [];
        let finish = 0;
        while(!q.isEmpty()){
            const node = q.pop();
            res.push(node);
            finish++;

            for(const nei of adj[node]){
                indegree[nei]--;

                if(indegree[nei] == 0){
                    q.push(nei);
                }
            }

        }

        return finish == numCourses ? res : [];
    }
}
