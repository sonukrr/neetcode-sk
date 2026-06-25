class Solution {
    findRedundantConnection(edges) {
        const adj = Array.from({ length: edges.length + 1 }, () => []);

        function dfs(node, parent, visit) {
            visit[node] = true;

            for (const nei of adj[node]) {
                if (nei === parent) continue;

                if (visit[nei]) return true;

                if (dfs(nei, node, visit)) return true;
            }

            return false;
        }

        for (const [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);

            const visit = Array(edges.length + 1).fill(false);

            if (dfs(u, -1, visit)) {
                return [u, v];
            }
        }

        return [];
    }
}