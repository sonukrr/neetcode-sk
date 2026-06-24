
class Solution{
    
    validTree(n, edges){
        if (edges.length > n - 1) {
            return false;
        }
        // no cycles
        const adj = Array.from({length: n}, () => new Array());

        for(const [v1, v2] of edges){
            adj[v1].push(v2);
            adj[v2].push(v1);

        }

        const set = new Set();
        
        return dfs(0, -1) && set.size == n;

        function dfs(n, parent){
            if(set.has(n)) {                
                return false;
            };

            set.add(n);

            for(const nei of adj[n]){
                if(nei == parent)
                    continue;

                if(!dfs(nei, n)){
                    return false;
                }
            }

            return true;

        }

    }
}



