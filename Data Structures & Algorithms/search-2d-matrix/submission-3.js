class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const row = matrix.length;
        const col = matrix[0].length;

        let l = 0;
        let r = row * col - 1;

        while(l <= r){
            const mid = Math.floor((l + r) / 2);

            let i = Math.floor(mid / col);
            let j = mid % col;

            if(matrix[i][j] === target) return true;

            if(matrix[i][j] > target){
                r = mid - 1;
            }else {
                l = mid + 1;
            }
        }

        return false;
    }
}
