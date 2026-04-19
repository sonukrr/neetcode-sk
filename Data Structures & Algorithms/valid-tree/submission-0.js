class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        // create an adj list
        // check from each node for cycle
        // maintain visited set for nodes in current path of DFS

        var map = new Map();
        for(let i = 0; i < n; i++){
            map.set(i, []);
        }


        for(const [n1, n2] of edges){
            map.get(n1).push(n2);
            map.get(n2).push(n1);

        }

        const set = new Set();

        return dfs(0, -1) && set.size == n;


        function dfs(node, parent){
            if(set.has(node)){
                // cycle
                return false;
            }

            set.add(node);

            const neighbors = map.get(node) || [];
            for(const nei of neighbors){
                if(nei == parent)
                    continue;

                if(!dfs(nei, node))
                    return false;
            }

            return true;
        }
    }
}
