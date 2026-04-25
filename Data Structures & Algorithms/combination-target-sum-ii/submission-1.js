class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        // sort to avoid duplicates
        candidates.sort((a, b) => a - b);
        const res = [];
        dfs(0, [], 0);
        return res;

        function dfs(i, path, sum){
            if(sum == target){
                res.push([...path]);
                return;
            }

            if(i == candidates.length || sum > target){
                return;
            }

            // pick candidates[i]
            path.push(candidates[i]);
            dfs(i + 1, path, sum + candidates[i]);
            path.pop();

            // do not pick candidates[i]
            while( i + 1 < candidates.length &&  candidates[i] == candidates[i + 1])
                i++;
            
            dfs(i + 1, path, sum);

        }
    }
}
