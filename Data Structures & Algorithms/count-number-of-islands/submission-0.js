class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let count = 0;
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
            if(grid[r][c] == 0) return;

            grid[r][c] = '0';
            
            if(r - 1 >= 0 && grid[r-1][c] == '1')
                traverseAndMark(r-1, c);
            if(r + 1 < rows && grid[r+1][c] == '1')
                traverseAndMark(r+1, c);

            if(c - 1 >= 0 && grid[r][c-1] == '1')
                traverseAndMark(r, c - 1);

            if(c + 1 < cols && grid[r][c+1] == '1')
                traverseAndMark(r, c + 1);
        }

    }
}
