class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const ROWS = board.length;
        const COLS = board[0].length;

        const directions = [
            [0, 1],
            [1, 0],
            [-1, 0],
            [0, -1]
        ]

        for(let i = 0; i < ROWS; i++){
            for(let j = 0; j < COLS; j++){
                if(board[i][j] == word[0]){
                    if(dfs(i, j, 0)){
                        return true;
                    }                   
                }
            }
        }

        return false;

        function dfs(r, c, wordIdx){
            // full word matched
            if(wordIdx == word.length)
                return true;

            // if out of bounds or no match return
            if(r < 0 ||
                c < 0 ||
                r >= ROWS || 
                c >= COLS ||
                board[r][c] !== word[wordIdx] ||
                board[r][c] == '#'
            ){
                return false;
            }

            // both char matches

            // mark as visited to avoid coming back in the path
            const temp = board[r][c];
            board[r][c] = '#';

            for(const [nr, nc] of directions){
                if(dfs(r + nr, c + nc, wordIdx + 1))
                    return true;
            }

            // backtrack
            board[r][c] = temp;

            return false;

        }
    }
}
