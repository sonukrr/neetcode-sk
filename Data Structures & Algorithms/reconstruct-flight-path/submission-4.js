class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
        // Eulerian path 
        // HierHolzer's algorithm

        // step 1 - create adj list in reverse order
        const adj = {};
        tickets.sort().reverse().forEach(([src, dst]) => {
            if(!adj[src]) adj[src] = [];
            adj[src].push(dst);
        })

        let res = [];
        dfs('JFK');

        return res.reverse();

        function dfs(src){
            while(adj[src]?.length > 0){
                const dst = adj[src].pop();
                dfs(dst);
            }

            res.push(src);
        }
    }
}
