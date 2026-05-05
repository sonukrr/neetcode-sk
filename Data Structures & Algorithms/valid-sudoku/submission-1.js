class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const ROWS = board.length;
        const COLS = board[0].length;

        const rowSet = Array.from({ length: ROWS }, () => new Set());
        const colSet = Array.from({ length: COLS }, () => new Set());
        const boxSet = Array.from({ length: ROWS }, () => new Set());



        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                let val = board[i][j];

                if (val != '.') {
                    let boxIdx = (Math.floor(i / 3)) * 3 + Math.floor((j / 3));
                    if (rowSet[i].has(val) || colSet[j].has(val) || boxSet[boxIdx].has(val)) {
                        return false;
                    }

                    rowSet[i].add(val);
                    colSet[j].add(val);
                    boxSet[boxIdx].add(val);
                }


            }
        }

        return true;
    }
}
