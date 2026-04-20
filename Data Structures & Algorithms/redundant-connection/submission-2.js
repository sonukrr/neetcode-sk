class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const len = edges.length;
        
        // intitlaize parent as self node
        const par = Array.from({length: len}, (_, i) => i);

        // size of each connected component
        const rank = new Array(len).fill(0);

        for(const [n1, n2] of edges){
            if(!union(n1, n2))
                return [n1, n2]; // cycle introduced with this edge
        }

        return [];

        function find(n){
            let p = par[n];

            while(p != par[p]){ // root. parent of current is self
                p = par[p];
            }
            return par[p];
        }

        function union(n1, n2){
            let p1 = find(n1);
            let p2 = find(n2);

            if(p1 === p2)
                return false; // both nodes are already part of same component -> cycle detected

            // add smaller tree into larger tree as child
            if(rank[p1] > rank[p2]){
                par[p2] = p1; // add p2 as child to p1
                rank[p1]++; // update size of root
            }else{
                par[p1] = p2; // add p1 as child to p2
                rank[p2]++; // update size of rot
            }

            return true; // union successfull - no cycles

        }
    }
}
