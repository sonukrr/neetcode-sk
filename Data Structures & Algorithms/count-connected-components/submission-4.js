class Solution{
    countComponents(n, edges){
        const adj = Array.from({length: n}, () => new Array());

        for(const [u, v] of edges){
            adj[u].push(v);
            adj[v].push(u);
        }

        let count = 0;
        let set = new Set();

        for(let i = 0; i < n; i++){
            if(set.has(i)){
                // component is already traversed, so skip it
                continue;
            }else{    
                count++;            
                // mark all the nodes in this path as visited 
                dfs(i);

            }
        }

        return count;

        function dfs(n){
            if(set.has(n)) return;
            

            set.add(n);

            for(const nei of adj[n]){
                dfs(nei);
            }
        }
    }
}