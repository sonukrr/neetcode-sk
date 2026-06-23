class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const r = grid.length;
        const c = grid[0].length;

        var mins = 0;

        var q = new Queue();

        for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {
                if (grid[i][j] == 2)
                    q.push([i, j]);
            }
        }

        while (!q.isEmpty()) {
            let size = q.size();
            

            for (let k = 0; k < size; k++) {
                const [i, j] = q.pop();

                if (i + 1 < r && grid[i + 1][j] == 1) {
                    
                    grid[i + 1][j] = 2;
                    q.push([i + 1, j]);
                }

                if (j + 1 < c && grid[i][j + 1] == 1) {
                    
                    grid[i][j + 1] = 2;
                    q.push([i, j + 1]);
                }

                if (i - 1 >= 0 && grid[i - 1][j] == 1) {
                    
                    grid[i - 1][j] = 2;
                    q.push([i - 1, j]);
                }

                if (j - 1 >= 0 && grid[i][j - 1] == 1) {
                    
                    grid[i][j - 1] = 2;
                    q.push([i, j - 1]);
                }


            }

            
                mins++;


        }

        for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {
                if (grid[i][j] == 1)
                    return -1;
            }
        }

        return mins == 0 ? 0 :  mins - 1;
    }
}
