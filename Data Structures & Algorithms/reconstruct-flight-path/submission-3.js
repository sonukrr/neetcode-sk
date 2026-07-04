class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
        const adj = {};
        for(const [src, dst] of tickets){
            if(!adj[src]) adj[src] = [];

            adj[src].push(dst);
        }

        for(const key in adj){
            adj[key] = adj[key].sort();
        }

        let res = ['JFK'];
        dfs('JFK');

        return res;

        function dfs(node){
            
            if(res.length == tickets.length + 1) return true;
            if(!adj[node]) return false;

            

            let temp = [...adj[node]];
            for(let i = 0; i < temp.length; i++){
                const v = temp[i];
                adj[node].splice(i, 1);
                res.push(v);

                if(dfs(v)) return true;
                
                res.pop();
                adj[node].splice(i, 0, v);
            }

            return false;
        }
    }
}
