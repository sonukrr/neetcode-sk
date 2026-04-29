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

            // upper col check - row decrement, col fixed
            for(let i = r - 1; i >= 0; i--){
                if(board[i][c] == 'Q') 
                    return false;
            }
            
            // top right diagonal check
            for(let i = r - 1, j = c + 1; i >= 0 && j <= n; i--, j++){
                if(board[i][j] == 'Q')
                    return false;
            }

            // top left diagonal check
            for(let i = r - 1, j = c - 1; i >= 0 && j >= 0; i--, j--){
                if(board[i][j] == 'Q')
                    return false;
            }

            return true;
        }
        
    }
}
