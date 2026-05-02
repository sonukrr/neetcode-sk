class TrieNode {
    constructor() {
        this.children = {}; // no need of array as we are always goin to lookup for char and not loop over all childrens like it was in wildcard probelm
        this.isEnd = false;
    }
}
class Solution {

    constructor() {
        this.root = new TrieNode();
    }
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const ROWS = board.length;
        const COLS = board[0].length;
        const res = [];
        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1]
        ]

        this.buildTrie(words);

        // iterate over the grid
        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                let char = board[i][j];
                if (this.root.children[char])
                    dfs(i, j, this.root, []);

            }
        }

        return res;

        function dfs(r, c, node, curr) {


            if (r < 0 || r >= ROWS || c < 0 || c >= COLS || !node || !node.children[board[r][c]] || board[r][c] == '#')
                return;


            let char = board[r][c];
            let temp = board[r][c];
            board[r][c] = '#';

            // char is matching
            curr.push(char);
            let nextNode = node.children[char];

            // check after pushing the char
            if (nextNode.isEnd) {
                res.push(curr.join(''));
                nextNode.isEnd = false;
                // do not return as we are yet to explore more down the same path
            }

            for (const [nr, nc] of directions) {
                dfs(r + nr, c + nc, nextNode, curr);
            }

            board[r][c] = temp;
            curr.pop();

        }
    }

    buildTrie(words) {
        for (const word of words) {
            // add each word to trie
            let node = this.root;

            for (const c of word) {
                if (!node.children[c]) {
                    node.children[c] = new TrieNode();
                }

                node = node.children[c];
            }

            node.isEnd = true;
        }
    }
}
