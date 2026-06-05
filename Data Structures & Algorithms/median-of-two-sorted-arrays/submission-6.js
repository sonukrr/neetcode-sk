class Solution {

    findMedianSortedArrays(nums1, nums2){
        let l1 = nums1.length;
        let l2 = nums2.length;

        let median1 = 0;
        let median2 = 0;
        
        let i = 0, j = 0;

        for(let k = 0; k <= (l1 + l2) / 2; k++){
            median1 = median2; 

            if(i < l1 && j < l2){
                if(nums1[i] < nums2[j]){
                    median2 = nums1[i];
                    i++;
                }else{
                    median2 = nums2[j];
                    j++;
                }
            }else if(i >= l1){
                median2 = nums2[j];
                j++;
            }else{
                median2 = nums1[i];
                i++;
            }
        }

        console.log(median1, median2);

        if((l1 + l2) % 2 == 1){
            return median2;
        }else{
            return (median1 + median2) / 2;
        }        

    }
}


