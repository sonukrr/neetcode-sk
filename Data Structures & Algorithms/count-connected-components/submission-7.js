class DSU{
    constructor(n){
        this.parent = Array.from({length: n}, (_, i) => i);
        this.rank = Array(n).fill(1);
    }

    // find the root of the node in a component
    find(node){
        let curr = node;
        while(curr !== this.parent[curr]){
            this.parent[curr] = this.parent[this.parent[curr]];
            curr = this.parent[curr];
        }

        return curr;
    }

    union(u, v){
        let pu = this.find(u);
        let pv = this.find(v);

        if(pu == pv)
            return false;

        if(this.rank[pv] > this.rank[pu]){
            [pu, pv] = [pv, pu];
        }

        this.parent[pv] = pu;
        this.rank[pu] += this.rank[pv];
        return true;
    }
}

class Solution{
    countComponents(n, edges){
        const dsu = new DSU(n);
        let res = n;

        for(const [u, v] of edges){
            if(dsu.union(u, v)){
                res--;
            }
        }

        return res;
    }
}