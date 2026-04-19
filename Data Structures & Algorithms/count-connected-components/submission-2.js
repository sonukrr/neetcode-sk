class Solution {
    /**
     * @param {number} n - number of nodes (0 to n-1)
     * @param {number[][]} edges - undirected edges
     * @returns {number} - number of connected components
     */
    countComponents(n, edges) {

        // Step 1: Build adjacency list
        const map = new Map();
        for (let i = 0; i < n; i++) {
            map.set(i, []); // initialize each node with empty neighbors
        }

        // Fill adjacency list (undirected graph → bidirectional edges)
        for (let [u, v] of edges) {
            map.get(u).push(v);
            map.get(v).push(u);
        }

        // Step 2: Track visited nodes
        const set = new Set();

        // Count of connected components
        let count = 0;

        // Step 3: Traverse all nodes
        for (let i = 0; i < n; i++) {

            // If node is not visited → new component found
            if (!set.has(i)) {
                set.add(i);     // mark node as visited
                dfs(i);         // explore entire component
                count++;        // increment component count
            }
        }

        return count;

        /**
         * DFS helper to traverse all nodes in a component
         * @param {number} node - current node
         */
        function dfs(node) {

            // Get all neighbors of current node
            const neighbors = map.get(node);

            for (const nei of neighbors) {

                // Visit unvisited neighbors
                if (!set.has(nei)) {
                    set.add(nei);   // mark as visited
                    dfs(nei);       // recursively explore
                }
            }
        }
    }
}