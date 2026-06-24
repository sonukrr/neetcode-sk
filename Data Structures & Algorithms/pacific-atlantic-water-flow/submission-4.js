// Input: heights = [
//   [4,2,7,3,4],
//   [7,4,6,4,7],
//   [6,3,5,3,6]
// ]

// Output: [[0,2],[0,4],[1,0],[1,1],[1,2],[1,3],[1,4],[2,0]]


class Solution{
    pacificAtlantic(heights) {
        let ROWS = heights.length;
        let COLS = heights[0].length;

        let pac = Array.from({length: ROWS}, () => new Array(COLS).fill(false));
        let atl = Array.from({length: ROWS}, () => new Array(COLS).fill(false));

        
        const directions = [
            [0, 1],
            [1, 0],
            [-1, 0],
            [0, -1]
        ]
        
        for(let r = 0; r < ROWS; r++){            
            dfs(r, 0, pac); // pacific            
            dfs(r, COLS - 1, atl); // atlantic
        }

        for(let c = 0; c < COLS; c++){            
            dfs(0, c, pac);  // pacific            
            dfs(ROWS - 1, c, atl); // atlantic
        }

        const res = [];

        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                if(pac[r][c] && atl[r][c])
                    res.push([r,c]);
            }
        }

        return res;
        

        function dfs(r, c, visit){
            if(r < 0 || c < 0 || r >= ROWS || c >= COLS || visit[r][c]) return;

            visit[r][c] = true;

            for(const [dr, dc] of directions){
                let nr = r + dr;
                let nc = c + dc;

                if(nr >= 0 && nc >= 0 && nr <= ROWS - 1 && nc <= COLS - 1 && heights[nr][nc] >= heights[r][c]){
                    dfs(nr, nc, visit);
                }
            }                                    
        }
    }

  
}