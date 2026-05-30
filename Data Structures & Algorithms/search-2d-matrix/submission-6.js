class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // think of array like a flat sorted array
        // the row and col can be determined from the current index

        const ROWS = matrix.length;
        const COLS = matrix[0].length;
        let l = 0;
        let r = ROWS * COLS - 1;

        while(l <= r){
            const mid = Math.floor((l + r) / 2);

            const i = Math.floor(mid / COLS);
            const j = Math.floor(mid % COLS);

            if(target == matrix[i][j])
                return true;

            if(target > matrix[i][j]){
                l = mid + 1;
            }else{
                r = mid - 1;
            }
        }

        return false;
        
    }
}
