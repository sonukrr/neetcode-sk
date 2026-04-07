class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        // 2 pointers
        let median1 = 0;
        let median2 = 0;

        let midIdx = Math.floor((nums1.length + nums2.length) / 2);

        let i = 0,
        j = 0;

        for(let count = 0; count < midIdx + 1; count++){
            median1 = median2;

            if(i < nums1.length && j < nums2.length){
                if(nums1[i] < nums2[j]){
                    median2 = nums1[i];
                    i++;
                }else{
                    median2 = nums2[j];
                    j++;
                }
            }else if(i < nums1.length){
                median2 = nums1[i];
                i++;
            }else{
                median2 = nums2[j];
                j++;
            }
        }

        let isEven = (nums1.length + nums2.length) % 2 == 0;
        if(isEven){
            return (median1 + median2) / 2.0;
        }else
            return median2;
    }
}
