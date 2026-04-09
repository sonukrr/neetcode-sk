class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        const directions = [
            [0, -1],
            [0, 1],
            [-1, 0],
            [1, 0]
        ];

        const q = new Queue();

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] == 0){
                    q.push([r, c]);
                }
            }
        }

        while(!q.isEmpty()){
            let size = q.size();
            for(let i = 0; i < size; i++){
                let [r, c] = q.pop();
                
                for(const [dr, dc] of directions){
                    let nr = r + dr;
                    let nc = c + dc;

                    if(nr < 0 || nc < 0 || nr >= rows || nc >= cols || grid[nr][nc] != 2147483647)
                        continue;
                    
                    // its a land (INF) reachable
                    grid[nr][nc] = grid[r][c] + 1;
                    q.push([nr, nc]);
                }
            }
        }
        
    }
}
