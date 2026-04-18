class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const map = new Map();

        // maintain map of courses and there preReq 
        for(const [crs, pre] of prerequisites){
            if(!map.has(crs)){
                map.set(crs, [pre]);
            }else{
                map.get(crs).push(pre);
            }
        }

        // for each course check if it can be taken or not
        for(let i = 0; i < numCourses; i++){
            if(!dfs(i, new Set()))
                return false;
        }


        return true;

        function dfs(c, visitedSet){
            // cycle detected. i.e, this course cannot be taken
            if(visitedSet.has(c))
                return false;

            // no repReq to take this course so it can be surely taken
            if(!map.has(c))
                return true;

            visitedSet.add(c); // mark as visited

            let preReqs = map.get(c);
            // loop over all the pre-reqs
            for(const pre of preReqs){
                if(!dfs(pre, visitedSet))
                    return false;

                visitedSet.delete(pre);
            }

            return true;

        }


    }
}
