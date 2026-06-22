class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        let max = 0;
        const directions = [
            [0, -1],
            [-1, 0],
            [0, 1],
            [1, 0]
        ]

        for(let r = 0; r < rows; r++){
            for(let c = 0; c < cols; c++){
                if(grid[r][c] == '1'){
                    max = Math.max(max, countAndMark(r, c));
                }
            }
        }

        return max;

        function countAndMark(r, c){
            if(r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] == '0')
                return 0;
            
            grid[r][c] = '0';
            let count = 1;
            for(const [dr, dc] of directions){
                count += countAndMark(r + dr, c + dc);
            }

            return count;
        }
    }
}
