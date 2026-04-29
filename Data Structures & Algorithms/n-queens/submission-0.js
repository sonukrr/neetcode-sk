class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const board = Array.from({length: n}, () => Array(n).fill('.'));
        const res = [];

        backtrack(0);
        return res;


        function backtrack(r){
            if(r == n){
                res.push(board.map(row => row.join('')));
                return;
            }

            for(let c = 0; c < n; c++){
                if(isSafe(r, c, board)){
                    board[r][c] = 'Q';
                    backtrack(r + 1);
                    board[r][c] = '.';
                }
            }
        }

        function isSafe(r, c, board){
            // row check - check each column of given row
            //  col check - check each row of given col
            for(let j = 0; j < n; j++){
                if(board[r][j] == 'Q')
                    return false;
                
                if(board[j][c] == 'Q')
                    return false;
            }

            for(let i = 0; i < n; i++){
                for(let j = 0; j < n; j++){
                    // positive diagonal
                    if(r + c == i + j && board[i][j] == 'Q')
                        return false;
                    
                    // negative diagonal
                    if(r - c == i - j && board[i][j] == 'Q')
                        return false;
                }
            }

            return true;
        }
        
    }
}
