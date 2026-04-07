class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // find the row
        let rowL = 0;
        let rowR = matrix.length - 1;
        let row = -1;

        while (rowL <= rowR) {
            let mid = Math.floor((rowL + rowR) / 2);
            let first = matrix[mid][0];
            let last = matrix[mid][matrix[mid].length - 1];

            if (target >= first && target <= last) {
                row = mid;
                break;
            }

            if (first < target && last < target) {
                rowL = mid + 1;
            } else {
                rowR = mid - 1;
            }
        }

        if(row == -1)
            return false;

        let colL = 0;
        let colR = matrix[row].length - 1;

        while (colL <= colR) {
            let mid = Math.floor((colL + colR) / 2);
            if (matrix[row][mid] == target) {
                return true;
            }

            if (matrix[row][mid] < target) {
                colL = mid + 1;
            } else {
                colR = mid - 1;
            }

        }


        return false;
    }
}
