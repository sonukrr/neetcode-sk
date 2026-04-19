class Solution {
    /**
     * @param {number} n - number of nodes (0 to n-1)
     * @param {number[][]} edges - list of undirected edges
     * @returns {boolean} - true if graph is a valid tree
     */
    validTree(n, edges) {
        // A valid tree must satisfy:
        // 1. No cycles
        // 2. Fully connected (all nodes reachable)

        // Step 1: Build adjacency list for undirected graph
        var map = new Map();
        for (let i = 0; i < n; i++) {
            map.set(i, []); // initialize each node with empty neighbors list
        }

        // Fill adjacency list (bidirectional since undirected)
        for (const [n1, n2] of edges) {
            map.get(n1).push(n2);
            map.get(n2).push(n1);
        }

        // Step 2: Use a set to track visited nodes
        const set = new Set();

        // Step 3: Start DFS from node 0
        // - dfs ensures no cycle
        // - set.size === n ensures full connectivity
        return dfs(0, -1) && set.size == n;

        /**
         * DFS helper to detect cycle
         * @param {number} node - current node
         * @param {number} parent - node we came from (to avoid false cycle)
         */
        function dfs(node, parent) {
            // If already visited → cycle detected
            if (set.has(node)) {
                return false;
            }

            // Mark current node as visited
            set.add(node);

            // Traverse all neighbors
            const neighbors = map.get(node) || [];
            for (const nei of neighbors) {

                // Skip the parent node (important for undirected graph)
                if (nei == parent) continue;

                // If DFS on neighbor detects a cycle → return false
                if (!dfs(nei, node)) return false;
            }

            // No cycle found from this path
            return true;
        }
    }
}