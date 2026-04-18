class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        // Step 1: Initialize
        let indegree = new Array(numCourses).fill(0);
        let adj = new Array(numCourses).fill(0).map(() => []);

        // Step 2: Build graph
        // [course, prereq] => prereq → course
        for (let [course, prereq] of prerequisites) {
            adj[prereq].push(course);
            indegree[course]++;
        }

        // Step 3: Add all nodes with indegree 0
        let queue = [];
        for (let i = 0; i < numCourses; i++) {
            if (indegree[i] === 0) {
                queue.push(i);
            }
        }

        // Step 4: Process queue
        let finish = 0;

        while (queue.length > 0) {
            let node = queue.shift(); // pop front
            finish++;

            for (let nei of adj[node]) {
                indegree[nei]--;
                if (indegree[nei] === 0) {
                    queue.push(nei);
                }
            }
        }

        // Step 5: Check if all courses completed
        return finish === numCourses;
    }
}