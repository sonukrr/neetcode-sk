class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const map = new Map();
        const res = [];

        // graph representation via map
        for(const [c, pre] of prerequisites){
            if(!map.has(c)){
                map.set(c, [pre]);
            }else{
                map.get(c).push(pre);
            }
        }

        const set = new Set(); // maintians course that can be completed
        const cycle = new Set(); // contains courses of current path in dfs

        //iterate and check for each course if it can be completed
        for(let i = 0; i < numCourses; i++){
            if(!dfs(i))
                return [];
        }

        return res;

        function dfs(c){
            if(cycle.has(c)){
                // cycle detected
                return false;
            }

           if(set.has(c)){
            // course can be completed
            return true;
           }

            cycle.add(c);

            const preReqs = map.get(c) || [];
            for(const pre of preReqs){
                if(!dfs(pre))
                    return false;
            }

            cycle.delete(c);
            set.add(c);
            res.push(c);

            return true;


        }
    }
}
