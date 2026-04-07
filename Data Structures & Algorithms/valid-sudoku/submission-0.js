class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        const rows = Array.from({ length: 9 }, () => new Set());
        const cols = Array.from({ length: 9 }, () => new Set());
        const boxes = Array.from({ length: 9 }, () => new Set());

        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[r].length; c++) {
                let val = board[r][c];

                if (val == '.')
                    continue;

                if (rows[r].has(val)) return false;
                rows[r].add(val);

                if (cols[c].has(val)) return false;
                cols[c].add(val);

                const boxIdx = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                if (boxes[boxIdx].has(val)) return false;
                boxes[boxIdx].add(val);
            }
        }

        return true;
    }
}
