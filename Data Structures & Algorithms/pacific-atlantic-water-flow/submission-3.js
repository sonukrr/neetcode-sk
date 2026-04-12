class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const rows = heights.length;
        const cols = heights[0].length;

        const pac = Array.from({length: rows}, () => new Array(cols).fill(false));
        const atl = Array.from({length: rows}, () => new Array(cols).fill(false));
        const res = [];

        const directions = [
            [-1, 0],
            [0, -1],
            [1, 0],
            [0, 1]
        ];

        for(let r = 0; r < rows; r++){
            dfs(r, 0, pac);
            dfs(r, cols - 1, atl);
        }

        for(let c = 0; c < cols; c++){
            dfs(0, c, pac);
            dfs(rows - 1, c, atl);
        }

        for(let i = 0; i < rows; i++){
            for(let j = 0; j < cols; j++){
                if(pac[i][j] && atl[i][j]){
                    res.push([i, j]);
                }
            }
        }

        return res;



        function dfs(r, c, ocean){
            if(r < 0 || c < 0 || r >= rows || c >= cols || ocean[r][c]) return;
            
            ocean[r][c] = true;
            
            for(const [dr, dc] of directions){
                const nr = r + dr;
                const nc = c + dc;

                if(nr >= 0 && nc >= 0 && nr < rows && nc < cols && heights[nr][nc] >= heights[r][c])
                    dfs(r + dr, c + dc, ocean);
            }
            

        }
    }
}
