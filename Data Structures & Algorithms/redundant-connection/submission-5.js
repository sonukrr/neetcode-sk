class DSU{
    constructor(n){
        this.parent = Array.from({length: n + 1}, (_, i) => i);
        this.rank = new Array(n).fill(1);
    }

    find(node){
        let cur = node;
        while(cur != this.parent[cur]){
            this.parent[cur] = this.parent[this.parent[cur]]; // parent's parent
            cur = this.parent[cur];
        }

        return this.parent[cur]; 
    }


    union(u, v){
        const pu = this.find(u);
        const pv = this.find(v);

        // already these two different vertices are connected
        if(pu == pv){
            return false;
        }

        if(this.rank[v] > this.rank[u]){
            [u, v] = [v, u];
        }

        this.parent[pv] = pu;
        this.rank[pu] += this.rank[pv];

        return true;

    }
}

class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {

        const dsu = new DSU(edges.length);

        for(const [u, v] of edges){
            // when a cycle is added fue to current edge, no union will be performed 
            if(!dsu.union(u, v)){
                return [u, v];
            }
        }

    }
}

