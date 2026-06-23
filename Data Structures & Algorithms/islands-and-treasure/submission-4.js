class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        // multi source bfs

        let ROWS = grid.length;
        let COLS = grid[0].length;

        const q = new Queue();
        const directions = [
            [0, 1],
            [1, 0],
            [-1, 0],
            [0, -1]
        ]

    
        // all treasure are the starting points
        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
              if(grid[r][c] == 0)
                q.push([r, c]);
            }
        }

        while(!q.isEmpty()){
            let size = q.size();

            for(let i = 0; i < size; i++){
                let [r, c] = q.pop();

                for(const [dr, dc] of directions){
                    let nr = r + dr;
                    let nc = c + dc;

                    if(nr < 0 || nc < 0 || nr >= ROWS || nc >= COLS || grid[nr][nc] !=  2147483647)
                        continue;
                    
                    grid[nr][nc] = 1 + grid[r][c];
                    q.push([nr, nc]);
                }

                
                
            }
        }

        
    }
}







