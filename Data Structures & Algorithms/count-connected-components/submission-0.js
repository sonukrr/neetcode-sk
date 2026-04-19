class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {

        const map = new Map();
        for(let i = 0; i < n; i++){
            map.set(i, []);
        }

        for(let [u, v] of edges){
            map.get(u).push(v);
            map.get(v).push(u);
        }

        const set = new Set();
        let count = 0;

        for(let i = 0; i < n; i++){
            if(!set.has(i)){
                count++;
                dfs(i, -1);
            }
        }

        return count;

        function dfs(node, parent){
            if(set.has(node)){
                return;
            }

            set.add(node);

            const neighbors = map.get(node);
            for(const nei of neighbors){
                if(nei === parent)
                    continue;
                
                dfs(nei, node);
            }

            return;
        }
    }
}
