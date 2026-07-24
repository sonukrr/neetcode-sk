class Solution {
    climbStairs(n) {

        const cache = Array(n).fill(-1);
        
        function dfs(i){
            if(cache[i] > 0) return cache[i];

            if(i >= n) return i == n;

            let paths =  dfs(i + 1) + dfs(i + 2);
            cache[i] = paths;
            return paths;
        }


        return dfs(0);

    }
}