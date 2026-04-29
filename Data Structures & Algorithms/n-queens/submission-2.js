class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        var res = [];
        const board = Array.from({length: n}, () => Array(n).fill('.'));

        const col = new Set();
        const posDiag = new Set();
        const negDiag = new Set();
        backtrack(0);
        return res;


        function backtrack(r){
            if(r == n){
                res.push(board.map(row => row.join('')));
                return;
            }

            for(let c = 0; c < n; c++){
                if(col.has(c) || posDiag.has(r + c) || negDiag.has(r - c)){
                    continue;
                }

                col.add(c);
                posDiag.add(r + c);
                negDiag.add(r - c);
                board[r][c] = 'Q';

                backtrack(r + 1);

                board[r][c] = '.';
                col.delete(c);
                posDiag.delete(r + c);
                negDiag.delete(r - c);
            }
        }
    }
}
