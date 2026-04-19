class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        // Step 1: intialize parent array
        // each node is initially its own parent
        const par = Array.from({length: edges.length + 1}, (_, i) => i);

        // Step 2: Initialize size (rank of each component)
        const rank = new Array(edges.length + 1).fill(1);

        // Step 3: Process each edge
        for(const [n1, n2] of edges){
            // Try to union nodes
            // If union fails -> cycle edge found
            if(!union(n1, n2)){
                return [n1, n2];
            }
        }

        // No redundant edge found (should not happen as per problem)
        return [];

        function find(n){
            let p = par[n];

            // traverse until we reach the root
            while(p !== par[p]){
                
                // Path compression
                // Point current node directly to grandparent
                // this flattens the tree -> faster future queries
                par[p] = par[par[p]];

                p = par[p];
            }

            return p;
        }

        function union(n1, n2){

            // find master root of both nodes
            let p1 = find(n1);
            let p2 = find(n2);

            // If same root -> already connected -> cycle
            if(p1 == p2){
                return false;
            }

            // Union by rank (attach smaller tree under larger one)
            if(rank[p1] > rank[p2]){
                par[p2] = p1;  // attach p2 under p1
                rank[p1] += rank[p2]; // update size
            }else{
                par[p1] = p2; // attach p1 under p2
                rank[p2] += rank[p1]; // update size
            }

            return true;
        }
    }
}
