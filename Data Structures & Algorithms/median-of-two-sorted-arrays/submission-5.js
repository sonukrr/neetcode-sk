class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let A = nums1;
        let B = nums2;

        // Ensure A is the smaller array
        if (A.length > B.length) {
            [A, B] = [B, A];
        }

        const total = A.length + B.length;
        const half = Math.floor(total / 2);

        let l = 0;
        let r = A.length;

        while (l <= r) {
            let i = Math.floor((l + r) / 2); // partition in A
            let j = half - i;                // partition in B

            let ALeft  = i > 0 ? A[i - 1] : -Infinity;
            let ARight = i < A.length ? A[i] : Infinity;

            let BLeft  = j > 0 ? B[j - 1] : -Infinity;
            let BRight = j < B.length ? B[j] : Infinity;

            // correct partition
            if (ALeft <= BRight && BLeft <= ARight) {
                if (total % 2 === 0) {
                    return (Math.max(ALeft, BLeft) + Math.min(ARight, BRight)) / 2;
                } else {
                    return Math.min(ARight, BRight);
                }
            } 
            // move left
            else if (ALeft > BRight) {
                r = i - 1;
            } 
            // move right
            else {
                l = i + 1;
            }
        }
    }
}