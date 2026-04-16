class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const rows = board.length;
        const cols = board[0].length;

        const directions = [
            [0, 1],
            [-1, 0],
            [1, 0],
            [0, -1]
        ]

        // mark the 0's reachable from border 0 with #
        for(let r = 0; r < rows; r++){
            if(board[r][0] == 'O')
                dfs(r, 0); // left 
            
            if(board[r][cols - 1] == 'O')
                dfs(r, cols - 1); // right
        }

        for(let c = 0; c < cols; c++){
            if(board[0][c] == 'O')
                dfs(0, c); // top
            
            if(board[rows - 1][c] == 'O')
                dfs(rows - 1, c); // bottom

        }

        console.log(board)


        // mark all O's as sorrounded with X and replace # back to O
        for(let r = 0; r < rows; r++){
            for(let c = 0; c < cols; c++){
                if(board[r][c] == 'O')
                    board[r][c] = 'X';
                else if(board[r][c] == '#')
                    board[r][c] = 'O';
                
            }
        }


        function dfs(r, c){
            if( r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] == '#' || board[r][c] == 'X')
                return;
            
            // curr is O so mark and navigate in all 4 directions till we keep gettign 0
            board[r][c] = '#';

            for(const [dr, dc] of directions){
                dfs(r + dr, c + dc);
            }

        }

    }
}
