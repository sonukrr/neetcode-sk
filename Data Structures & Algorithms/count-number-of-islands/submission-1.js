class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let count = 0;

        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1]
        ]

        for(let r = 0; r < rows; r++){
            for(let c = 0; c < cols; c++){
                if(grid[r][c] == '1'){
                    count++;
                    traverseAndMark(r,c);
                }
            }
        }

        return count;

        function traverseAndMark(r, c){
            if(r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] == '0') return;

            grid[r][c] = '0';
            
            for(const [i, j] of directions){
                traverseAndMark(r + i, c + j);
            }
        }

    }
}
