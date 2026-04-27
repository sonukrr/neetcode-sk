class Solution {
  /**
   * @param {character[][]} board
   * @param {string} word
   * @return {boolean}
   */
  exist(board, word) {
    if (!word) return false;

    var flag = false;
    const ROWS = board.length;
    const COLS = board[0].length;

    const directions = [
      [0, 1],
      [1, 0],
      [-1, 0],
      [0, -1],
    ];

    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        if (board[i][j] === word[0]) {          
            dfs(i, j, 0)
            if(flag) return true;
        }
      }
    }

    return flag;

    function dfs(r, c, wordIdx) {
      if (wordIdx == word.length){
        flag = true;
        return;
      }        

 
      // boundary + mismatch
      if (
        r < 0 ||
        c < 0 ||
        r >= ROWS ||
        c >= COLS ||
        board[r][c] !== word[wordIdx]
      ) {
        return;
      }

      // mark visited
      const temp = board[r][c];
      board[r][c] = "#";

      // explore in all four direction
      for (const [nr, nc] of directions) {
        dfs(r + nr, c + nc, wordIdx + 1);
      }

      // backtrack
      board[r][c] = temp;
      
    }
  }
}
