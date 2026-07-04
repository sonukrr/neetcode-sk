class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        const directions = [
            [0, 1],
            [1, 0],
            [-1, 0],
            [0, -1]
        ];

        const minHeap = new MinPriorityQueue(entry => entry[0]); // smallest time

        minHeap.enqueue([grid[0][0], 0, 0]);
        const set = new Set();
        set.add('0,0')

        while (!minHeap.isEmpty()) {
            const [t, r, c] = minHeap.dequeue();

            if (r == ROWS - 1 && c == COLS - 1) return t;

            for (const [dr, dc] of directions) {
                let nr = r + dr;
                let nc = c + dc;

                if (nr < 0 || nc < 0 || nr >= ROWS || nc >= COLS || set.has(`${nr},${nc}`)) continue;

                set.add(`${nr},${nc}`);
                minHeap.enqueue([Math.max(t, grid[nr][nc]), nr, nc]);
            }
        }
    }
}
