class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a, b) => a - b);
        const res = [];

        dfs(0, [], 0);
        return res;

        function dfs(start, path, sum) {
            if (sum === target) {
                res.push([...path]);
                return;
            }

            for (let i = start; i < candidates.length; i++) {

                // FIX: skip duplicates only at same level (horizontal), 
                // vertically duplicates are allowed to have
                // start -> current Level
                if (i > start && candidates[i] === candidates[i - 1]) continue;

                if (sum + candidates[i] > target) break;

                path.push(candidates[i]);
                dfs(i + 1, path, sum + candidates[i]);
                path.pop();
            }
        }
    }
}