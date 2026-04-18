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

        const visitedSet = new Set(); // to contain all courses of current path in dfs

        //iterate and check for each course if it can be completed
        for(let i = 0; i < numCourses; i++){
            if(!dfs(i))
                return [];
        }

        return res;

        function dfs(c){
            if(visitedSet.has(c)){
                // cycle detected
                return false;
            }

            if(!map.has(c)){
                // no prereq needed
                if(!res.includes(c))
                    res.push(c);
                return true; 
            }

            visitedSet.add(c);
            const preReqs = map.get(c);
            for(const pre of preReqs){
                if(!dfs(pre))
                    return false;
            }

            visitedSet.delete(c);
            if(!res.includes(c))
                res.push(c);
            map.set(c, []);

            return true;


        }
    }
}
