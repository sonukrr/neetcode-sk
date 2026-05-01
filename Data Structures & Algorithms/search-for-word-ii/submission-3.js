class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const res = [];
        const ROWS = board.length;
        const COLS = board[0].length;

        const directions = [
            [0, 1],
            [1, 0],
            [-1, 0],
            [0, -1]
        ]

        var charObj = {};

        for (const word of words) {
            let c = word[0];
            if (!charObj[c]) {
                charObj[c] = [word];
            } else {
                charObj[c].push(word);
            }
        }

        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                var arr = charObj[board[i][j]];
                if (!arr) continue;

                    for (const w of arr) {
                        if (!res.includes(w) && dfs(i, j, 0, w)){
                            res.push(w);
                        }
                            
                    }
            }
        }
        return res;


        function dfs(r, c, i, word) {
            if (i == word.length) return true;

            if (r < 0 || r >= ROWS || c < 0 || c >= COLS || board[r][c] != word[i])
                return false;

            let temp = board[r][c];
            board[r][c] = '#';

            for (const [nr, nc] of directions) {
                if (dfs(r + nr, c + nc, i + 1, word)){
                    board[r][c] = temp;
                    return true;
                }
            }

            board[r][c] = temp;
            return false;

        }
    }
}
