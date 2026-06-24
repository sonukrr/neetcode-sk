class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {

        // adjacency list
        const map = {};
        for(let i = 0; i < numCourses; i++){
            map[i] = [];
        }

        for(const [c1, c2] of prerequisites){
            map[c1].push(c2)
        }

        for(let i = 0; i < numCourses; i++){
            if(hasCycle(i, new Set())){
                return false;
            }
           
        }

        return true;

        function hasCycle(c, set){
            if(set.has(c))
                return true;

            set.add(c);
            let flag = false;
            for(const nc of map[c]){
                if(!flag)
                flag = hasCycle(nc, set);
            }

            set.delete(c);

            return flag;
        }
    }
}
