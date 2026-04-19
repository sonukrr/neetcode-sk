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
                set.add(i);
                dfs(i);
                count++;
            }
        }

        return count;

        function dfs(node){

            const neighbors = map.get(node);
            for(const nei of neighbors){
               
                if(!set.has(nei)){
                    set.add(nei);
                    dfs(nei);
                }
                    
            }

        }
    }
}
