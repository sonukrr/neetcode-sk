class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
     

        let l = 0;
        let r = matrix.length - 1;
        let rIdx = -1;

        while(l <= r){
            const mid = Math.floor((l + r) / 2);

            if(target >= matrix[mid][0] && target <= matrix[mid][matrix[mid].length - 1]){
                rIdx = mid;
                break;
            }


            if(target > matrix[mid][matrix[mid].length - 1]){
                l = mid + 1;
            }else{
                r = mid - 1;
            }
        }

        if(rIdx < 0)
            return false;


        l = 0;
        r = matrix[rIdx].length - 1;

        while(l <= r){
            const mid = Math.floor((l + r) / 2);

            if(target === matrix[rIdx][mid])
                return true;

            if(target > matrix[rIdx][mid]){
                l = mid + 1;
            }else{
                r = mid - 1;
            }
        }

        return false;

    }
}
