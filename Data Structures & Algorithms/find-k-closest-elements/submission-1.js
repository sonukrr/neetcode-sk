class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let l = 0;
        let r = arr.length - 1;

        while( r - l + 1 > k ){
            if(Math.abs(arr[l] - x) > Math.abs(arr[r] - x)){
                l++;
            }else{
                r--;
            }
        }

        return arr.slice(l, l + k);
    
    }
}
